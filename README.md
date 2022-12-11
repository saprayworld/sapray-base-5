# Sapray-Japanese

## คำสั่งพื้นฐาน
### คำสั่งดึงโปรเจคใหม่ทั้งหมด
``` bash
# clone the repo
$ git clone https://github.com/saprayworld/Sapray-Japanese.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ yarn install
```

### คำสั่งอัพเดทโปรเจคจากเซิฟเวอร์ github (Local <-- Server)
``` bash
git pull 
```

### คำสั่งอัพเดทโปรเจคขึ้นเซิฟเวอร์ github (Local --> Server)
``` bash
git add *
git commit -m "ข้อความที่บอกว่าอัพเดทอะไรไปบ้าง"
git push origin master
```

### อัพเดทไฟล์ ระหว่างที่ไฟล์บนเซิฟเวอร์มีการอัพเดทไปก่อนแล้ว
``` bash
git stash
git pull
git stash apply
git commit -m 'ข้อความที่บอกว่าอัพเดทอะไรไปบ้าง'
git push origin master
git stash drop
```