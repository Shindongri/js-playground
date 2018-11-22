function baz() {
    bar();
}

function bar() {
    foo();
}

function foo() {
    console.log( "foo" );
}

baz();




/**
 * this 는 함수 호출 시점이 아닌 런타임 시점에 바인딩 되며 함수 호출 당시 상황에 따라 콘텍스트가 결정된다.
 *
 * 어떤 함수를 호출하면 활성화 레코드. 즉, 실행 콘텍스트( Execution Context ) 가 만들어진다.
 * 호출된 근원( 콜스택 ) 과 호출방법, 전달된 인자 등의 정보가 담겨있다.
 *
 *
 *
* */
