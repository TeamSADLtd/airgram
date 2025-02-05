import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessageSenderInputUnion } from '../inputs'
import { OkUnion } from '../outputs'

export interface ToggleGroupCallParticipantIsMutedParams {
  groupCallId?: number // Group call identifier
  participantId?: MessageSenderInputUnion // Participant identifier
  isMuted?: boolean // Pass true if the user must be muted and false otherwise
}

/**
 * Toggles whether a participant of an active group call is muted, unmuted, or allowed
 * to unmute themselves
 * @param {Object} params
 * @param {number} [params.groupCallId] - Group call identifier
 * @param {MessageSenderInputUnion} [params.participantId] - Participant identifier
 * @param {boolean} [params.isMuted] - Pass true if the user must be muted and false
 * otherwise
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleGroupCallParticipantIsMutedParams, OkUnion>>}
 */
export type toggleGroupCallParticipantIsMuted = (
  params?: ToggleGroupCallParticipantIsMutedParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleGroupCallParticipantIsMutedParams, OkUnion>>
