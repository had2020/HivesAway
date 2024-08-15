#cd Client && npm run dev &
#python3 server/main.py
#python3 ../server/main.py

cd Client
npm run dev & # Runs frontend in the background
cd ..
cd server
python3 main.py