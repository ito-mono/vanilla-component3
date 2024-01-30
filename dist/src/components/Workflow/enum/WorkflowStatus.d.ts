export declare enum WorkflowStatus {
    None = 0,// 申請情報なし
    PrePetition = 1,// 申請前
    Petitioning = 2,// 申請中
    Remanded = 3,// 差戻し中
    Approved = 4,// 承認完了
    CanEdit = 11,// 編集可能
    Editing = 12,// 編集中
    Approving = 13
}
