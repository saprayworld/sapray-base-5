
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
    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Compressing objects: 100% (1/1), done.
    remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
    Unpacking objects: 100% (3/3), 1011 bytes | 77.00 KiB/s, done.
    From https://github.com/saprayworld/sapray-base-5
      b74ffeb..a69aa91  dev-sapray -> origin/dev-sapray
    On branch dev-sapray
    Your branch is behind 'origin/dev-sapray' by 1 commit, and can be fast-forwarded.
      (use "git pull" to update your local branch)

    nothing to commit, working tree clean
    ```
    ตามข้างต้นหมายความว่า ตอนนี้มีการอัพเดทข้อมูลบน server repo ไปก่อนแล้ว เราจะต้องทำการอัพเดทข้อมูลของเราให้ตรงกับข้อมูลบน repo ก่อน แล้วค่อยทำงานของเราต่อ

    โดยตัวอย่างข้างต้นบอกว่า ตอนนี้เราอยู่ที่ branch ที่ชื่อ origin/dev-sapray มีการอัพเดทไปแล้ว 1 commit ส่วนคำว่า `nothing to commit, working tree clean` หมายความว่า เรายังไม่ได้ยุ่งกับโค้ดในเครื่องของเรา จึงไม่ต้องทำการอัพเดทไปยัง repo ในกรณีที่เราทำงานเสร็จและเราไม่ลืมที่จะโยนงาน (commit) ขึ้นไปบน repo ก่อนจะเลิกงาน
    
    > แนะนำว่าทุกครั้งที่เราจะหยุดทำงาน ให้เราทำการ save งานของเราก่อนทุกครั้ง โดยการ commit หรือโยนงานเราขึ้นไปยัง repo เพื่อในอนาคตเราจะได้ไม่ต้องยุ่งวุ่นวายมากเมื่อโค้ดนั้นมีการอัพเดทก่อนเรา
2. การอัพเดทไฟล์โปรเจคของเราให้ตรงกับข้อมูลของ server repo  
    เราจะใช้คำสั่ง `git pull` เพื่ออัพเดทข้อมูลของเราจาก server repo
    ```
    /path/to/project> git pull
    Updating b74ffeb..a69aa91
    Fast-forward
     GitCmd.md | 70 ++++++++++++++++++++++++++++++++++++++++++++-------------------
     1 file changed, 49 insertions(+), 21 deletions(-)
    ```
    ทีนี้ ให้เราลองรัน `git fetch && git status` อีกครั้ง หรือ `git status` ก็ได้
    ```
    /path/to/project> git fetch && git status
    On branch dev-sapray
    Your branch is up to date with 'origin/dev-sapray'.

    nothing to commit, working tree clean
    ```
    ก็จะพบว่า ข้อมูลของเราถูกอัพเดทเรียบร้อยแล้ว เราก็เริ่มทำงานของเราต่อได้เลย

### เมื่อหยุดทำงาน หรือเลิกงานแล้วได้เวลากลับบ้านนนนน
แน่นอนแหละ ว่าเราก็ต้องบันทึกสิ่งที่เราทำทั้งหมดเนี้ยขึ้น repo ไปซะ เดะพรุ่งนี้มาทำต่อละงานชั้นหายหมดละงามไส้เลยนะนั้น เห้ยละมันทำยังไงล่ะ

สิ่งที่เราต้องทำคือ เมื่อเราทำงานเสร็จแล้วในแต่ละครั้ง หรือแต่ละวันนั้นให้เราโยนงานของเราขึ้นไปบน server repo โดยตามขั้นตอนนี้
1. ให้ใช้คำสั่ง `git status` เพื่อตรวจสอบดูก่อนว่าเราแกไฟล์ไหนอะไรยังไงไปบ้าง
    ```
    /path/to/project> git status
    On branch dev-sapray
    Changes not staged for commit:
      (use "git add <file>..." to update what will be committed)
      (use "git restore <file>..." to discard changes in working directory)
            modified:   GitCmd.md

    no changes added to commit (use "git add" and/or "git commit -a")
    ```
    ตามข้างต้นนี้จะบอกเราว่า ตอนนี้ข้อมูลของเรามีการแก้ไขไปแล้ว แต่ว่ายังไม่ได้ทำการ commit นะ

    ทีนี้ เราจะมีสองทางที่เราทำได้ละ คือ เราจะบันทึกข้อมูลนี้ หรือเราจะทิ้งมันไปซะ  
    - ถ้าเราจะบันทึกให้ใช้คำสั่ง `git add .` เพื่อบอกว่าไฟล์ทั้งหมดที่เราแก้ไขไปเนี่ย เราจะทำ commit นะ
    - ถ้าเราจะยกเลิกการแก้ไขทั้งหมด ให้เราใช้คำสั่ง `git restore .` ไฟล์ทั้งหมดที่เราแก้ไขไปก็จะกลับไปยัง save ล่าสุดที่เราได้อัพเดทไปนั้นเอง  

      > เราสามารถกระทำเฉพาะบางไฟล์ที่เราต้องการได้ด้วยการแทน . เป็นชื่อไฟล์ที่เราต้องการ เช่น  
      `git add ./update/sapray.txt`  
      `git add sapraynote.txt`  
      หรือ  
      `git restore ./update/sapray.txt`  
      `git restore sapraynote.txt`  

    ในกรณีนี้เราจะทำการบันทึกงานที่เราได้ทำมาให้เราใช้คำสั่ง `git add .` เพื่อเพิ่มไฟล์ทั้งหมดของเรา ไปทำการ commit
    

1. ให้ใช้คำสั่ง `git push origin <you-branch-name>` เพื่อทำการอัพเดทไฟล์ของเราไปยัง repo
    ```

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