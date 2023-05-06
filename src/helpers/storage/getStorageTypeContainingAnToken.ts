import { StorageKeys } from 'types'

import { getItemFromStorage } from './index'
import { StorageTypes } from './types'

type GetStorageTypeContainingAnToken = () => StorageTypes

const getStorageTypeContainingAnToken: GetStorageTypeContainingAnToken = () => {
	if (getItemFromStorage(StorageKeys.TOKEN, '', StorageTypes.LOCAL_STORAGE)) {
		return StorageTypes.LOCAL_STORAGE
	}
	if (getItemFromStorage(StorageKeys.TOKEN, '', StorageTypes.SESSION_STORAGE)) {
		return StorageTypes.SESSION_STORAGE
	}

	return StorageTypes.COOKIES
}

export default getStorageTypeContainingAnToken
