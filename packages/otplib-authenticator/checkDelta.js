import { totpCheckWithWindow } from 'otplib-core';
import decodeKey from './decodeKey';

/**
 * Checks the provided OTP token against system generated token
 * Returns the delta (window) which token passes.
 * Returns null otherwise.
 *
 * @module otplib-authenticator/checkDelta
 * @param {string} token - the OTP token to check
 * @param {string} secret - your secret that is used to generate the token
 * @param {object} options - options which was used to generate it originally
 * @return {integer | null}
 */
function checkDelta(token, secret, options) {
  return totpCheckWithWindow(token, decodeKey(secret), options);
}

export default checkDelta;