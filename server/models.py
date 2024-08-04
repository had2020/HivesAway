import sqlite3

def user_login(username, password):
    conn = sqlite3.connect('Database.db')
    cursor = conn.cursor()

    cursor.execute('SELECT password FROM accounts WHERE username = ?', (username,))
    row = cursor.fetchone()

    if row is None:
        return "no user"
    else:
        stored_password = row[0]
        if password == stored_password:
            return "yes user"
        else:
            return "wrong password"

def user_signup(username, password):
    conn = sqlite3.connect('Database.db')  
    cursor = conn.cursor() 

    cursor.execute('''CREATE TABLE IF NOT EXISTS accounts (
                        username TEXT NOT NULL,
                        password TEXT NOT NULL
                    )''')

    for name in (username, password): 
        cursor.execute("SELECT rowid FROM accounts WHERE (username, password) = (?, ?)", (username, password))
        data=cursor.fetchone()
        if data is None:
            print('There is no user named %s'%name)
            cursor.execute("INSERT INTO accounts (username, password) VALUES (?, ?)", (str(username), str(password))) #creating new user
            conn.commit()  
            return "created user" # return login status somehow
        else:
            print('User %s found with rowid %s'%(name,data[0]))
            return "already user"