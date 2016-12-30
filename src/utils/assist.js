/**
 * Created by chengfei on 2016/12/29.
 */
export function oneOf(value, validList) {
	for (let i = 0; i < validList.length; i++) {
		if (value === validList[i]) {
			return true;
		}
	}
	return false;
}