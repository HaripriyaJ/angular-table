export interface IColumnConfig {
    [index: string]: any;
    header: string;
    data: string;
    pinColumn: "left" | "right" | "none"; // direction of column to be pinned
    pinOrder: any;
    columnWidth: number;
}
