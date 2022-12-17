
# วิธีใช้งาน git

ในหน้านี้จะรวบรวมคำสั่งในแต่ละสถานการณ์เอาไว้ โดยจะเป็นคำสั่งพื้นฐานที่จำเป็นต้องใช้ในการทำงาน

## คำสั่งพื้นฐาน
### เมื่อเริ่มต้นทำงานครั้งแรก
เมื่อเริ่มต้นทำงานครั้งแรก ให้ดำเนินการตามวิธีด้านล่างนี้  
1. เริ่มต้นจากการโคลนโปรเจคจาก repo โดยใช้คำสั่งดังนี้
    ``` bash
    # โคลนข้อมูลจาก repo
    git clone <url-repo> my-project

    # ไปยังโปรเจค
    cd my-project

    # ย้าย branch ไปยัง branch ของตัวเอง ที่ไม่ใช่ main หรือ master
    git checkout -b <you-branch-name> origin/<you-branch-name>

    # ตัวอย่าง เช่น ย้ายไปยัง branch ที่ชื่อ dev-sapray ให้ใช้คำสั่ง:
    git checkout -b dev-sapray origin/dev-sapray

    # ทำการรันคำสั่งเพื่อติดตั้งแพ็คเกจที่จำเป็นสำหรับพัฒนาโปรเจค เช่น
    yarn install
    # หรือ
    npm install
    ```

    หากไม่รู้ว่า branch ของตัวเองชื่ออะไรให้ใช้คำสั่ง `git branch -a` เพื่อดูรายการ branch ทั้งหมด  
    ``` bash
    /path/to/project> git branch -a
    * dev-sapray
      master
      remote/origin/dev
      remote/origin/dev-sapray
      remote/origin/master
    ```
    โดยที่ขึ้นต้นด้วย remote/origin/*** จะเป็นข้อมูล branch จาก server repo


### คำสั่งดึงโปรเจคใหม่ทั้งหมด

``` bash
# โคลนจาก repo
git clone <url-repo> my-project

# ไปยังโปรเจค
cd my-project

# รันคำสั่งติดตั้ง
yarn install
```

### คำสั่งอัพเดทโปรเจคจากเซิฟเวอร์ github (Local <-- Server)
``` bash
git pull
# หรือ
git pull origin master
```

### คำสั่งอัพเดทโปรเจคขึ้นเซิฟเวอร์ github (Local --> Server)
``` bash
git add *
# หรือ
git add .

git commit -m "ข้อความกำกับการ commit"

git push origin master
# หรือ
git push -u origin main
```

### อัพเดทไฟล์ ระหว่างที่ไฟล์บนเซิฟเวอร์มีการอัพเดทไปก่อนแล้ว
``` bash
git stash
git pull
git stash apply
git commit -m 'ข้อความกำกับการ commit'
git push origin master
git stash drop
```

### การสร้าง branch ใหม่
``` bash
# การสร้าง branch ใหม่ จะใช้คำสั่งนี้
git checkout -b <new-branch-name> <target-branch-name>

# เช่น จะสร้าง dev-sapray โดยอ้างอิงข้อมูลจาก master
git checkout -b dev-sapray master

# หรือสร้าง dev-sapray โดยอ้างอิงข้อมูลจาก origin/master
git checkout -b dev-sapray origin/master

# อัพเดท branch ใหม่ขึ้น repo
git push origin dev-sapray
```

อัพเดทเมื่อ: 2022/12/17