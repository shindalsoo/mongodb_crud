Server Engine :-
----------------------------------------------------------------------------
1. Node JS (Backend)

Database :-
----------------------------------------------------------------------------
1.  MongoDB (Database)

Packages/Modules :-
----------------------------------------------------------------------------
1. Express JS (Framework Based on NodeJS)
2. Mongoose (Object Data Modeling (ODM) library)
3. EJS (Embedded JavaScript Templating Engine)
4. Multer (Image Uploading)
5. Express Session (Strong Session Messages)
6. Dotenv (Environment Variables)
7. Nodemon (Monitoring Server)

Frontend Library :-
----------------------------------------------------------------------------
1. Bootstrap 5 (Designing)
2. DataTable (Pagination, Sorting etc.)
3. Fontawesome (Icons)

Database Modeling :-
----------------------------------------------------------------------------
1. DB명: ZioDocs
2. Collections
    1) docs (Embedded document)
    2) files (Linked document)
3. docs collection
```
{
  "_id" : ObjectId("506ebba74c935cb364575e95"),
  "Subject" : "문서제목입니다.",
  "LastStatus" : "상신/승인/반려/보류",
  "WriteUserName" : "작성자명",
  "RegDate" : "작성일자",
  "CntFiles" : 0,
  "Thumbnail" : "썸네일이미지명", 
  "files" : [{ 
    "fId" : "606exdefa74c935cb364575e95", 
    "FileName" : "파일명", 
    "Thumbnail" : "썸네일",
    "FileSize" : "Byte단위"
  },{ 
    "fId" : "606exdefa74c935cb364575e96", 
    "FileName" : "파일명", 
    "Thumbnail" : "썸네일",
    "FileSize" : "Byte단위"
  }]
}
```
4. files collection
```
{
  "_id" : ObjectId("606exdefa74c935cb364575e95"),
  "FileName" : "파일명", 
  "Thumbnail" : "썸네일",
  "FileSize" : "Byte단위",
  "SvrNo" : "존재서버번호",
  "Path" : "경로",
}
```
과제 :-
----------------------------------------------------------------------------
1. 첫번째 : 약간의 기능 변경
    - view페이지 하단에 수정/삭제 버튼 넣고 동작시키기
    - 리스트에 작성일자 시:분:초로 정확한 시간 보이게 하기
    - 문서등록과 수정화면에서 select박스를 radio버튼으로 변경하기
2. 두번째 : 회원검색기능
    1) 리스트페이지
        - 성명,나이,남여,회사명,연락처,국가명
    2) 조회페이지
3. 세번째 : 상세검색페이지
    - 검색영역 (국가, 나이, 태그, 눈색깔, 좋아하는 과일)
    - 결과는 통계절, 리스트절로 표시
    





