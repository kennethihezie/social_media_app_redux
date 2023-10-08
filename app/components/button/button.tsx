interface IButtonProps {
    text: string
    onClick: () => void
}

const Button = ({text, onClick}: IButtonProps) => {
    return (<button className="bg-purple-500 py-3 px-4 text-center text-white rounded-md font-semibold" onClick={ onClick }>
      { text }
    </button>)
}

export default Button