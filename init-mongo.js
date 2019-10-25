db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [
      {
        role: 'root',
        db: 'admin'
      }
    ]
  }
)
db.createUser(
  {
    user: 'valentin',
    pwd: 'valentin',
    roles: [
      {
        role: 'readWrite',
        db: 'game'
      }
    ]
  }
)
