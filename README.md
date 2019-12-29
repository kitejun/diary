# django-backend



# 멋쟁이 사자처럼 3팀 KPU 해커톤
##  나만의 Diary Web

__김연준(팀장), 박현욱, 양소영, 이찬우, 이상현, 박태영, 류영은, 강희정__

### 0. 개요
------------------------------
1. 비동기 Diary Web사이트 

<img src="/images/1.png" width="100%">
<img src="/images/2.png" width="100%">

### 1. 제작 목적
------------------------------
웹사이트를 통해 하루 일과 & 일상에서의 메모를 할 수 있음

### 2. 역할 분담
------------------------------
 * 김연준 : 백엔드, DB
 * 박현욱 : 백엔드
 * 양소영 : DB
 * 이찬우 : 백엔드, 프론트엔드
 * 이상현 : 백엔드, DB 
 * 박태영 : 프론트엔드
 * 류영은 : 프론트앤드 
 * 강희정 : 백엔드

 
### 3. Detail
------------------------------
 * Framework: Django Rest + React
 * Tool: Visual Code
 * 언어: Python, JavaScript
 * 기타: HTML, CSS
 * DB: SQLite
 
### 3. 사용법
------------------------------

#### Git Clone & Move Dir
 먼저 프로젝트를 clone하고 해당 프로젝트 폴더로 이동합니다.
```
git clone https://github.com/csy1204/djangobackend.git
cd django-backend
```

#### Install
 필요한 패키지를 설치해줍니다.
```
(optional) pip install django
pip install djangorestframework
pip install django-cors-headers
```

#### Run
  DB 마이그레이션을 한 후 서버를 켭니다.
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
