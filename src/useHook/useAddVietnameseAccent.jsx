
export default function (str) {
    let newstr = ''
    if(str == 'day-chuyen'){
        newstr = 'dây chuyền';
    }else if(str == 'vong-tay'){
        newstr = 'vòng tay';
    }else if(str == 'hoa-tai'){
        newstr = 'hoa tai';
    }else if(str == "nhan"){
        newstr = 'Nhẫn';
    }else{
        newstr = ' ';
    }

    return newstr;
}