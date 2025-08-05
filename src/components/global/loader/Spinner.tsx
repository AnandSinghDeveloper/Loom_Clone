

type SpinnerProps = {
  color?: string
}

const Spinner = ({ color }: SpinnerProps) => {
  return (
    <div  role="status">
       <svg
        className="animate-spin w-12 h-12 "
       
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#e5e7eb"
          strokeWidth={10}
        />
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke={"#"}
          strokeWidth={3}
          strokeLinecap="round"
        />
      </svg>
      
    </div>
  )
}

export default Spinner
