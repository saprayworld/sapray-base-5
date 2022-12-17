
# วิธีใช้งาน git

ในหน้านี้จะรวบรวมคำสั่งในแต่ละสถานการณ์เอาไว้ โดยจะเป็นคำสั่งพื้นฐานที่จำเป็นต้องใช้ในการทำงาน

## สถานะการณ์พื้นฐาน
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
      remotes/origin/HEAD -> origin/main
      remotes/origin/dev
      remotes/origin/dev-sapray
      remotes/origin/master
    ```
    โดยที่ขึ้นต้นด้วย remotes/origin/*** จะเป็นข้อมูล branch จาก server repo

### เมื่อเริ่มต้นทำงาน

หากว่าเราพึ่งเริ่มทำงานตามปกติ อย่างเช่น เริ่มงานตอนเช้า เราจะทำการโหลดข้อมูลโปรเจคจากที่เราทำค้างไว้ของรอบที่แล้ว หรือวันก่อน ก็จะมีขั้นตอนดังต่อไปนี้

1. ตรวจสอบข้อมูลโดยรวมก่อน โดยใช้: `git fetch && git status`
    ```
    /path/to/project> git fetch && git status
    On branch dev-sapray
    Your branch is up to date with 'origin/dev-sapray'.

    nothing to commit, working tree clean
    ```

    หากขึ้นแบบด้านบนนี้ คือไฟล์ของเราเป็นไฟล์อัพเดทล่าสุดแล้ว ให้เริ่มงานได้เลย  
    > หากว่าชื่อ branch ไม่ตรงกับที่เราจะใช้ทำงาน ให้ทำการสลับก่อนโดยใช้  
    `git checkout <branch-name>`

    หากขึ้นแบบด้านล่าง ให้ดำเนินการต่อที่ข้อต่อไป
    ```
    /path/to/project> git fetch && git status
    On branch dev-sapray
    Your branch is up to date with 'origin/dev-sapray'.

    nothing to commit, working tree clean
    ```
---
## ชุดคำสั่งทั่วไป
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

อัพเดทเมื่อ: 2022/12/17