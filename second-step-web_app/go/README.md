# api

## msg

URL ~/msg

METHOD GET

DESCRIPTION

- Return all message data

RESPOSE DATA

```:
-- example
[
    {
        "id": "1",
        "title": "歌舞伎町と果物",
        "description": "「私は天皇陛下の人格を非常にそんけいしている。」とマハル師はかたった。「なので、私は自分が天皇ではなくてほんとうによかったとおもっている。」ともかたった。生ゆば君は立派な人格など持たされては負けなのかもしれないと思った。",
        "path": "/absphoto/010_abs004.jpg",
        "lastBuildDate": "2018-04-11T21:40:00Z"
    }
]
```


## msg by id

URL ~/msg/{start id}-{end id}

METHOD GET

DESCRIPTION

- Return specified massages

RESPOSE DATA

```:
-- example
[
    {
        "id": "1",
        "title": "歌舞伎町と果物",
        "description": "「私は天皇陛下の人格を非常にそんけいしている。」とマハル師はかたった。「なので、私は自分が天皇ではなくてほんとうによかったとおもっている。」ともかたった。生ゆば君は立派な人格など持たされては負けなのかもしれないと思った。",
        "path": "/absphoto/010_abs004.jpg",
        "lastBuildDate": "2018-04-11T21:40:00Z"
    }
]
```

## max id

URL ~/msg/max

METHOD GET

DESCRIPTION

- Return message max id

RESPOSE DATA

```:
-- example
{
  "id": 100,
}
```