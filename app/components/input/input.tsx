import { Path, UseFormRegister } from "react-hook-form"
import { IFormInput } from "../form/form"

interface IInputProps {
    label: Path<IFormInput>
    register: UseFormRegister<IFormInput>
    required: boolean
}

const Input = ({label, register, required }: IInputProps) => {
    return (
        <div className="flex flex-col space-y-2">
            <div className="text-lg font-semibold">{ label }</div>
            <input  className="border border-purple-200 rounded-md py-4 px-2" aria-label={ label } {...register(label, { required })} />
        </div>
    )
}

export default Input