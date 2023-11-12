{
  "post": {
    "id": "unique_id",
    "title": "Titolo del Post",
    "content": "Contenuto del Post",
    "author": {
      "id": "author_id",
      "name": "Nome dell'Autore",
      "email": "email@autore.com",
      "profile": {
        "bio": "Biografia dell'autore",
        "avatar": "URL_avatar_autore"
      }
    },
    "categories": ["Categoria1", "Categoria2"],
    "tags": ["Tag1", "Tag2", "Tag3"],
    "createdAt": "data_creazione",
    "updatedAt": "data_aggiornamento",
    "status": "published",
    "likes": 150,
    "views": 1000,
    "comments": [
      {
        "id": "comment_id_1",
        "text": "Testo del commento",
        "author": {
          "id": "comment_author_id_1",
          "name": "Nome dell'Autore del Commento",
          "email": "email@commento.com",
          "profile": {
            "bio": "Biografia dell'autore del commento",
            "avatar": "URL_avatar_commento"
          }
        },
        "createdAt": "data_creazione_commento_1",
        "likes": 20
      },
      {
        "id": "comment_id_2",
        "text": "Altro testo del commento",
        "author": {
          "id": "comment_author_id_2",
          "name": "Nome dell'Altro Autore del Commento",
          "email": "email@altrocommento.com",
          "profile": {
            "bio": "Biografia dell'altro autore del commento",
            "avatar": "URL_avatar_altro_commento"
          }
        },
        "createdAt": "data_creazione_commento_2",
        "likes": 15
      }
    ],
    "attachments": [
      {
        "id": "attachment_id_1",
        "url": "URL_allegato_1",
        "type": "image"
      },
      {
        "id": "attachment_id_2",
        "url": "URL_allegato_2",
        "type": "video"
      }
    ]
  }
}
