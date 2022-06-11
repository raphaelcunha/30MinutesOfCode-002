/* eslint-disable no-shadow */

export enum EFileType {
  Image = 'IMAGE',
  Video = 'VIDEO',
}

export type TFile = {
  id: string
  fileUrl: string
  fileType: EFileType
  fileName: string
  createdAt: Date
  updatedAt: Date
}
