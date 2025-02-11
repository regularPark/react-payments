## 🫠 페어규칙

- 25분 주기 드라이버 교체하기 (한 사이클 후 쉬는 시간 10분)
- 막히는 부분이 있을 때 어떻게 해결했는지 해결 과정 기록하기
- 내비게이터는 키보드 만지지 않기

## 🛠️ 1단계 기능 구현 사항

- [x] 카드를 등록할 수 있다.
- [x] 카드 등록폼에서 사용자의 입력값을 바탕으로 카드를 등록한다
  - [x] 카드 이미지를 표시한다
  - [x] 카드 번호를 입력할 수 있다
    - [x] 16자리의 숫자를 입력한다.
    - [x] 뒤의 8자리는 검정색 동그라미로 표기한다.
    - [x] 4자리마다 대시(-)로 구분한다.
    - [x] 숫자가 아닌 값은 입력되지 않는다.
    - [x] 백스페이스로 이전 4자리 숫자들도 지울 수 있다.
    - [x] 아무것도 입력하지 않은 경우는 반투명 회색 0000-0000-0000-0000 표시한다.
  - [x] 카드 만료일을 입력할 수 있다
    - [x] 최대 만료일은 현재 연도를 기준으로 5년 이후까지로 한다.
  - [x] 카드 소유자 이름을 입력할 수 있다
    - [x] 19자를 초과하는 이름은 ...로 생략된다.
  - [x] 보안 코드를 입력할 수 있다
  - [x] 카드 비밀번호를 입력할 수 있다
- [x] 보유카드 목록에 등록한 카드 결과가 추가된다.

## 🔨 2단계 기능 구현 사항

- [x] 카드사를 선택해야 한다.
  - [x] 카드사에 따른 색상 및 이름의 차이
- [x] 카드 등록 후 카드의 이름을 추가할 수 있다.
- [x] 카드 목록에서는 카드사에 따른 색상 및 이름을 표기한다.

## UX 개선 사항

### 1단계

- [x] inputmode 추가로 모바일 사용자 경험을 개선
- [x] form 제출 버튼의 color를 black으로 변경하여 ios 환경의 오류(fix)
- [x] 잘못된 입력 시 캡션 등으로 사용자에게 알림
- [x] CVC 옆 물음표 버튼과 버튼 hover시 안내 문구 표기
- [x] autofocus를 이용한 사용자 경험 개선

### 2단계

- [x] 등록 폼 내부에서 볼 수 있는 카드 이미지와 사용자 입력 간 동기화 개선
- [x] 등록 폼에서 사용자의 입력에 따라 자동으로 포커스 이동
  - [x] 카드번호 입력 완료시 -> 만료일 -> 이름 ....
  - [x] 백스페이스로 지울 때 이전 input태그로도 이동

## 🪛 3단계 기능 구현 사항

- [x] 스피너 컴포넌트 생성
  - [x] 애니메이션 구현

### 필수 요구 사항

- [x] '카드를 등록중입니다' 스피너 추가
- [x] 사용하던 모달을 분리해서 npm으로 배포하고, 그 라이브러리를 직접 import해서 사용하기
- [x] 문서로서 스토리북을 고도화하기 위해 리팩터링
