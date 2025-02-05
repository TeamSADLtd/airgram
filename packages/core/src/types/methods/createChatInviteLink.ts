import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatInviteLinkUnion } from '../outputs'

export interface CreateChatInviteLinkParams {
  chatId?: number // Chat identifier
  name?: string // Invite link name; 0-32 characters
  expirationDate?: number // Point in time (Unix timestamp) when the link will expire; pass 0 if never
  memberLimit?: number // The maximum number of chat members that can join the chat via the link simultaneously; 0-99999; pass 0 if not limited
  createsJoinRequest?: boolean // True, if the link only creates join request. If true, member_limit must not be specified
}

/**
 * Creates a new invite link for a chat. Available for basic groups, supergroups, and
 * channels. Requires administrator privileges and can_invite_users right in the chat
 * @param {Object} params
 * @param {number} [params.chatId] - Chat identifier
 * @param {string} [params.name] - Invite link name; 0-32 characters
 * @param {number} [params.expirationDate] - Point in time (Unix timestamp) when
 * the link will expire; pass 0 if never
 * @param {number} [params.memberLimit] - The maximum number of chat members that
 * can join the chat via the link simultaneously; 0-99999; pass 0 if not limited
 * @param {boolean} [params.createsJoinRequest] - True, if the link only creates
 * join request. If true, member_limit must not be specified
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CreateChatInviteLinkParams, ChatInviteLinkUnion>>}
 */
export type createChatInviteLink = (
  params?: CreateChatInviteLinkParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CreateChatInviteLinkParams, ChatInviteLinkUnion>>
