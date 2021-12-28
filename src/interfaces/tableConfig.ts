export interface IColumnConfig {
    header: string;
    data: string;
    pinColumn: "left" | "right" | "none"; // direction of column to be pinned
    columnWidth: number;
}
