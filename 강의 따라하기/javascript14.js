// node type 체크하기

/*
```html
<div id="sample">
  안녕하세요?
</div>

<div id="result"></div>
```
*/

/*
nodeType 프로퍼티
var type = node.nodeType;
nodeType은 node의 type을 상수로 리턴합니다.

리턴 상수	|          타입	         |         예제
1	          element	                  <p />, <div />
3	          text	                    Hello
4	          CDATASection	            <!CDATA[[...]] >
7	          ProcessingInstruction	    <?xml-stylesheet... ?>
8	          Comment	                  <!-- comment -->
9	          Document	                document
10	        DocumentType	            <!DOCTYPE html>
11	        DocumentFragment	 

*/

{
  let elem = document.getElementById('sample');

  const docuType = document.nodeType;
  const divType = elem.nodeType;
  const textType = elem.firstChild.nodeType;

  // 출력
  document.getElementById('result').innerText += docuType; // 9
  document.getElementById('result').innerText += divType; // 1
  document.getElementById('result').innerText += textType; // 3

  // 안녕하세요?
  // 913
  
  /*
  HTML 
    nodeType을 테스트 할 sample div와
    결과를 출력할 result div가 있습니다.


  JS 
    const docuType = document.nodeType;
    document의 타입은 9(Document) 입니다.

    let elem = document.getElementById('sample');
    const divType = elem.nodeType;
    div sample은 element 객체이므로 1(element)을 리턴하였습니다.

    let elem = document.getElementById('sample');
    const textType = elem.firstChild.nodeType;

    div sample의 첫번째 자식 노드는 '안녕하세요?' 라는 텍스트 노드입니다.
    따라서, 3(Text)을 리턴하였습니다.
  */
}