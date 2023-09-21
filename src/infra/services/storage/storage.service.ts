import { AsyncStorage, AsyncStorageStatic } from '~/libs';
import { STORAGE_KEYS } from '~/utils';

class StorageService {
  storage: AsyncStorageStatic;

  constructor() {
    this.storage = AsyncStorage;
  }

  public setItem(key: STORAGE_KEYS, value: string): Promise<void> {
    return this.storage.setItem(key, value);
  }

  public getItem(key: STORAGE_KEYS): Promise<string | null> {
    return this.storage.getItem(key);
  }

  public removeItem(key: STORAGE_KEYS): Promise<void> {
    return this.storage.removeItem(key);
  }

  public getAllKeys(): Promise<readonly string[]> {
    return this.storage.getAllKeys();
  }

  public clear(): Promise<void> {
    return this.storage.clear();
  }
}

export default new StorageService();
