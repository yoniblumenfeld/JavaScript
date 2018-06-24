 var PHONES_LIST={
     Huwaei :new Phone(phone_name="HuwaeiE50", os_type = "Android", price = 500),
     LG :new Phone(phone_name ="LgG5", os_type ="Android", price =260),
     iPhone :new Phone(phone_name="iPhone7", os_type="IOS", price =245)
};
buying_process()


function buying_process(){
    var your_phones=[];
    var MONEY=1000;
    console.log("h")

    while (MONEY>0)
    {
        if(MONEY-PHONES_LIST.Huwaei.price > 0){
            buy_phone(PHONES_LIST.Huwaei);
        }
        else if (MONEY-PHONES_LIST.iPhone.price > 0){
            buy_phone(PHONES_LIST.iPhone);
        }
        else if (MONEY-PHONES_LIST.LG.price > 0){
            buy_phone(PHONES_LIST.LG);
        }
        else{
            break;
        }
    }
    console.log(String(MONEY))
    function buy_phone(phone) {
        your_phones.push(phone);
        MONEY -= phone.price;
        console.log("You bought a " + phone.phone_name + " with a total price of " + phone.price + "$ and now you have " + MONEY + "$ left");
        phone.vibrate()

    }

}

function Phone(phone_name,os_type,price) {
    this.phone_name = phone_name;
    this.os_type = os_type;
    this.price = price;
    this.vibrate = function __vibrate__() {
        console.log("bzzzzzz");
    }
}

