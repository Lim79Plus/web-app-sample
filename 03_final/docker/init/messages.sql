-- create table
CREATE TABLE messages (
    id INTEGER PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(140) NOT NULL,
    path VARCHAR(200) NOT NULL,
    created timestamp default CURRENT_TIMESTAMP
);

-- data insert

INSERT INTO messages (id, title, description, path, created) VALUES 
(1, '歌舞伎町と果物', '「私は天皇陛下の人格を非常にそんけいしている。」とマハル師はかたった。「なので、私は自分が天皇ではなくてほんとうによかったとおもっている。」ともかたった。生ゆば君は立派な人格など持たされては負けなのかもしれないと思った。', '/absphoto/010_abs004.jpg', 'Wed, 11 Apr 2018 21:40:00 +0900' )