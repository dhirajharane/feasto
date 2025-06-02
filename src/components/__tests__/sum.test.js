import { sum } from "../sum";


test("sum function",()=>{
    const result=sum(2,5);
    expect(result).toBe(7);

})