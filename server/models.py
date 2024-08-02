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
            cursor.execute("INSERT INTO accounts (username, password) VALUES (?, ?)", (str(username), str(password)))
            conn.commit()  
        else:
            print('User %s found with rowid %s'%(username,data[0]))

def user_signup(username, password):
    conn = sqlite3.connect('Database.db')  
    cursor = conn.cursor() 

    cursor.execute('''CREATE TABLE IF NOT EXISTS accounts (
                        username TEXT NOT NULL,
                        password TEXT NOT NULL
                    )''')

    # inserting and then commiting new data
    cursor.execute("INSERT INTO messages (username, password) VALUES (?, ?)", (str(username), str(password)))
    conn.commit() # commit changes