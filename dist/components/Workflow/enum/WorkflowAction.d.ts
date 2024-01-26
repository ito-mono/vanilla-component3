export declare enum WorkflowAction {
    AddUnit = 1,// ユニット追加
    ChangeApprover = 2,// 承認者変更
    RemoveUnit = 3,// ユニット削除
    Modify = 11,// 編集
    CancelModify = 12,// 編集キャンセル
    SubmitModify = 13,// 編集確定
    Petition = 14,// 申請
    CancelPetition = 21,// 申請キャンセル
    Approve = 31,// 承認
    Disapprove = 32,// 非承認
    Reapplication = 41
}
