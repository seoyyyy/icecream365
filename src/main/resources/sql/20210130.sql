create databases icecream365;
use icecream365;
create table customer (
    login_id varchar(20) not null PRIMARY KEY,
    login_pw varchar(100) not null,
    name varchar(20) not null,
    zipcode varchar(10) not null,
    addr1 varchar(50) not null,
    addr2 varchar(50) not null,
    email varchar(30) not null UNIQUE KEY,
    phone varchar(11) not null UNIQUE KEY,
    role int not null)
     ;
