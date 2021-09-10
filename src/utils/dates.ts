
export function getPreviousSunday (date: Date) {
    var d = new Date(date);
    d.setDate(d.getDate() - d.getDay());
    return d;
}

export function addDays(date: Date, days: number) {
    var d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

// export const formatDateForHeader = (date: Date | null) : string => {
//     if(!date) {
//       return "";
//     }
  
//     let val = date!.getMonth().toString().padStart(2, "0") + "/" + date!.getDate().toString().padStart(2, "0");
//     return val;
//   }