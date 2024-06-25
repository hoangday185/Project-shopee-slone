import axios, { AxiosError } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown
): error is AxiosError<FormError> {
  return (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.UnprocessableEntity
  )
}

//cu phap -? loai bo undefined cua key optional
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<Exclude<T[P], null | undefined>>
}

export type NoUndefinedFieldV2<T> = Exclude<T, undefined | null>
