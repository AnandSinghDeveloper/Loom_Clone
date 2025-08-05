"use server";

import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        status: 403,
      };
    }

    const userExit = await client.user.findUnique({
      where: {
        clerkid: user.id,
      },
      include: {
        workspace: {
          where: {
            User: {
              clerkid: user.id,
            },
          },
        },
      },
    });

    if (userExit) {
      return {
        success: true,
        status: 200,
        user: userExit,
      };
    }

    const newUser = await client.user.create({
      data: {
        clerkid: user.id,
        emailaddress: user.emailAddresses?.[0]?.emailAddress,
        firstname: user.firstName ?? "",
        lastname: user.lastName ?? "",
        image: user.imageUrl ?? "",
        studio: {
          create: {},
        },
        subscription: {
          create: {},
        },
        workspace: {
          create: {
            name: `${user.firstName ?? "User"}'s Workspace`,
            type: "PERSONAL",
          },
        },
      },
      include: {
        workspace: true,
        subscription: {
          select: {
            plan: true,
          },
        },
      },
    });

    if (newUser) {
      return {
        success: true,
        status: 201,
        user: newUser,
      };
    } else {
      return {
        success: false,
        status: 400,
      };
    }
  } catch (error) {
    return {
      success: false,
      status: 500,
    };
  }
};
