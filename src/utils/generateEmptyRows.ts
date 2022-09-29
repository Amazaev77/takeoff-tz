export const generateEmptyRows = (
  count: number,
  page: number,
  rowsPerPage: number,
): number => {
  return page > 0 ? Math.max(0, (1 + page) * rowsPerPage - count) : 0
}
