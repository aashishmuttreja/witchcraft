import {chromeApi} from "./index.js";

export function removeStorageChangedListener(callback) {
    chromeApi.chrome().storage.onChanged.removeListener(callback);
}
