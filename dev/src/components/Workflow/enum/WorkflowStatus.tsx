/* prettier-ignore */
export enum WorkflowStatus {
  None = 0,           // 申請情報なし
  PrePetition = 1,    // 申請前
  Petitioning = 2,    // 申請中
  Remanded = 3,       // 差戻し中
  Approved = 4,       // 承認完了

  /* 以下、アクティブに変わっていくステータス */
  // 申請前 から遷移するステータス
  CanEditFromPrePetition = 11,      // 編集可能
  EditingFromPrePetition = 12,      // 編集中

  // 申請中 から遷移するステータス
  CanEditFromPetitioning = 21,      // 編集可能
  EditingFromPetitioning = 22,      // 編集中
  Approving = 13,                   // 承認中

  // 差戻し中 から遷移するステータス
  CanEditFromRemanded = 31,         // 編集可能
  EditingFromRemanded = 32,         // 編集中

  // 申請情報なし から遷移するステータス
  CanEditFromNone = 91,             // 編集可能
  EditingFromNone = 92,             // 編集中


}
