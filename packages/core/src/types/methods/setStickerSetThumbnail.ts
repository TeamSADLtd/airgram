import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { StickerSetUnion } from '../outputs'

export interface SetStickerSetThumbnailParams {
  userId?: number // Sticker set owner
  name?: string // Sticker set name
  thumbnail?: InputFileInputUnion // Thumbnail to set in PNG or TGS format; pass null to remove the sticker set thumbnail. Animated thumbnail must be set for animated sticker sets and only for them
}

/**
 * Sets a sticker set thumbnail; for bots only. Returns the sticker set
 * @param {Object} params
 * @param {number} [params.userId] - Sticker set owner
 * @param {string} [params.name] - Sticker set name
 * @param {InputFileInputUnion} [params.thumbnail] - Thumbnail to set in PNG or TGS
 * format; pass null to remove the sticker set thumbnail. Animated thumbnail must be
 * set for animated sticker sets and only for them
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetStickerSetThumbnailParams, StickerSetUnion>>}
 */
export type setStickerSetThumbnail = (
  params?: SetStickerSetThumbnailParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetStickerSetThumbnailParams, StickerSetUnion>>
