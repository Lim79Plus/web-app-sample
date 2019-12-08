-- create table
CREATE TABLE messages (
    msg_id SERIAL PRIMARY KEY,
    auther VARCHAR(20) NOT NULL,
    body VARCHAR(140) NOT NULL,
    image_path VARCHAR(200) NOT NULL,
    created timestamp default CURRENT_TIMESTAMP
);

-- data insert
INSERT INTO messages (auther, body, image_path, created) VALUES 
 ('スピノザ(哲学者)', '人が不可能と思うとき、やりたくないと決めているのだ。','Spinoza', TO_TIMESTAMP('1632-11-24', 'YYYY-MM-DD'))
 ,('ラリー・ウォール', 'あなたたちの多くはプログラマの美徳をよく知っている。もちろんこの三つ、怠惰、短気、傲慢。','Larry Wall', TO_TIMESTAMP('1954-09-27', 'YYYY-MM-DD'))
 ;