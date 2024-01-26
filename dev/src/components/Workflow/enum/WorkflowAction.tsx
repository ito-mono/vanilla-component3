// prettier-ignore
export enum WorkflowAction {
  // ユニットに対してのアクション
  AddUnit = 1,                    // ユニット追加
  ChangeApprover = 2,             // 承認者変更
  RemoveUnit = 3,                 // ユニット削除

  // 申請前
  Modify = 11,                    // 編集
  CancelModify = 12,              // 編集キャンセル
  SubmitModify = 13,              // 編集確定
  Petition = 14,                  // 申請

  // 申請中 かつ 申請者 
  CancelPetition = 21,            // 申請キャンセル

  // 申請中 かつ 承認者
  Approve = 31,                   // 承認
  Disapprove = 32,                // 非承認

  // 承認済み
  Reapplication = 41,             // 再申請
}
