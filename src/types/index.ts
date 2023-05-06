export type ResponseEntityId = number
export type NodeElementsId = string
export type FileId = string

export interface ResponseEntitiesList<T> {
	data: T[]
	total: number
}

export interface ResponseWithError {
	error: CustomError
}

type CustomError = {
	status: number
	data: ErrorData
}

type ErrorData = {
	message: string
}

export interface AsyncThunkActionResponse {
	meta: { requestStatus: 'rejected' | 'fulfilled' }
}

export enum Constants {
	YEAR_LIST_LIMIT = 70,
	API_BASE_URL = 'https://'
}

export enum StorageKeys {
	REGISTRATION_DATA = 'REGISTRATION_DATA',
	PASSWORD_RECOVERY_DATA = 'PASSWORD_RECOVERY_DATA',
	REGISTRATION_STEP = 'REGISTRATION_STEP',
	PASSWORD_RECOVERY_STEP = 'PASSWORD_RECOVERY_STEP',
	TOKEN = 'TOKEN'
}
