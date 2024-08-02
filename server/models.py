import sqlite3

def user_login(username, password):
    conn = sqlite3.connect('Database.db')  
    cursor = conn.cursor() 

    cursor.execute('''CREATE TABLE IF NOT EXISTS accounts (
                        username TEXT NOT NULL,
                        password TEXT NOT NULL
                    )''')

    for username in (username, password): 
        cursor.execute("SELECT rowid FROM accounts WHERE (username, password) = (?, ?)", (username, password))
        data=cursor.fetchone()
        if data is None:
            print('There is no user named %s'%username)
            return "no user" # return login status somehow
        else:
            print('User %s found with rowid %s'%(username,data[0]))
            return "yes user"

def user_signup(username, password):
    conn = sqlite3.connect('Database.db')  
    cursor = conn.cursor() 

    cursor.execute('''CREATE TABLE IF NOT EXISTS accounts (
                        username TEXT NOT NULL,
                        password TEXT NOT NULL
                    )''')

    for username in (username, password): 
        cursor.execute("SELECT rowid FROM accounts WHERE (username, password) = (?, ?)", (username, password))
        data=cursor.fetchone()
        if data is None:
            print('There is no user named %s'%username)
            cursor.execute("INSERT INTO accounts (username, password) VALUES (?, ?)", (str(username), str(password))) #creating new user
            conn.commit()  
            return "created user" # return login status somehow
        else:
            print('User %s found with rowid %s'%(username,data[0]))
            return "already user"