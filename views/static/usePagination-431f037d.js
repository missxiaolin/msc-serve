import{g as e}from"./index-6c853ef9.js";const a={total:0,currentPage:1,pageSizes:[10,20,50],pageSize:10,layout:"total, sizes, prev, pager, next, jumper"};function t(t,n={}){const r=e({...a,...n});return{paginationData:r,handleCurrentChange:e=>{r.currentPage=e,t()},handleSizeChange:e=>{r.pageSize=e,t()}}}export{t as u};
//# sourceMappingURL=usePagination-431f037d.js.map
