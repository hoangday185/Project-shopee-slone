import { InputHTMLAttributes } from 'react'
import { RegisterOptions, type UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

const Input = ({
  errorMessage,
  name,
  className,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm foucs:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: InputProps): JSX.Element => {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <input
        className={classNameInput}
        {...registerResult} //react hook form tự override lại name của tag input do khi chạy register
        //nó sẽ trả và 1 field name tương tự
        {...rest}
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}

export default Input
