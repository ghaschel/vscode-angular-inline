// SYNTAX TEST "inline-template.ng"
import { Component } from '@angular/core';

@Component({
  selector: 'vscode-angular-inline',
  styleUrls: ['./vscode-angular-inline.scss'],
  template: `
    'keyword.operator.punctuation': #
    'constant.character.entity.html': #
    'support.type.object.html-attribute': #
    <!DOCTYPE html>

    'entity.name.tag.other.html': #
    'constant.numeric.angular-directive': #
    'keyword.operator.entity.html': #
    <div [test.test.test]=""></div>

    'string.regexp': #
    {{ test }}

    'keyword.operator.expression.let.js': #
    <div *ngIf="let a of test;"></div>


    DOCTYPE

    <!DOCTYPE html>
    <!DOCTYPE
      html
      PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"
    >

    COMMENTS

    <!-- COMMENTS -->

    INVALID ATTRIBUTES

    <a
      charset="interpolated {{value}}"
      coords=""
      rev=""
      shape=""
    ></a>

    <area nohref="" />

    <body
      alink=""
      background=""
      bgcolor=""
      link=""
      vlink=""
    ></body>

    <br clear="" />

    <caption align="test"></caption>

    <col
      char=""
      charoff=""
      valign=""
      width=""
    />

    <colgroup
      align=""
      char=""
      charoff=""
      valign=""
      width=""
    ></colgroup>

    <div
      align=""
      (click.test)=""
    ></div>

    <dl compact=""></dl>

    <h1 align=""></h1>
    <h2 align=""></h2>
    <h3 align=""></h3>
    <h4 align=""></h4>
    <h5 align=""></h5>
    <h6 align=""></h6>

    <head profile="test">
      <title>Teste</title>
    </head>

    <hr
      align=""
      noshade=""
      size=""
      width=""
    />

    <html version="">

    </html>

    <iframe
      align=""
      frameborder=""
      longdesc=""
      marginheight=""
      marginwidth=""
      scrolling=""
    ></iframe>

    <img
      align=""
      hspace=""
      longdesc=""
      name=""
      vspace=""
    />

    <input align="" />

    <legend align=""></legend>

    <li type=""></li>

    <link
      charset=""
      rev=""
      target=""
    />

    <link
      rel="stylesheet"
      type="text/css"
    >

    <link
      rel="icon"
      type="image/x-icon"
    >

    <menu compact=""></menu>

    <object
      archive=""
      border=""
      classid=""
      codebase=""
      codetype=""
      declare=""
      hspace=""
      standby=""
      vspace=""
      align=""
    ></object>

    <ol
      compact=""
      type=""
    ></ol>

    <p align=""></p>
    <param
      type=""
      valuetype=""
    />

    <pre width=""></pre>

    <table
      bgcolor=""
      border=""
      cellpadding=""
      cellspacing=""
      frame=""
      rules=""
      scheme=""
      width=""
    ></table>

    <tbody
      align=""
      char=""
      charoff=""
      valign=""
    ></tbody>

    <td
      abbr=""
      align=""
      axis=""
      bgcolor=""
      char=""
      charoff=""
      nowrap=""
      scope=""
      valign=""
      width=""
    ></td>

    <tfoot
      align=""
      class="test-class"
      char=""
      charoff=""
      valign=""
    ></tfoot>

    <th
      align=""
      bgcolor=""
      char=""
      charoff=""
      nowrap=""
      valign=""
      width=""
    ></th>

    <thead
      align=""
      char=""
      charoff=""
      valign=""
    ></thead>

    <tr
      align=""
      bgcolor=""
      char=""
      charoff=""
      valign=""
    ></tr>

    <ul
      compact="teste"
      type=""
    ></ul>

    CUSTOM ELEMENTS

    <custom-component
      (click)="callback()"
      (click.test)="callback()"
      (click.test.test)="callback()"
    ></custom-component>

    <menu-test></menu-test>

    ANGULAR DIRECTIVES

    <div
      [binding]="to.element"
      [binding]="to.function('with-parameter')"
      @animationTrigger
      [@.done]="test"
      (@rightCardTransition.done)="rightCardTransition = 'static'"
      (@.done)="test"
      [element_binding]="to.function_with_underline('with-parameter')"
      (click)="to.function(with.parameter)"
      (click)="to.function(with!.parameter)"
      (click)="to.function(with?.parameter)"
      [(binding)]="to.element"
      ([nonStandard])=""
      [attr.href]="file?.link"
      [style.font-size.px]="10"
      [@$visi_bility]="module.$visibility"
      [@visibility]="getMenuState()"
      [@visibility.done]="doSomething()"
      [(binding)]="to.function('with-parameter')"
      ([test])="to.function('with-parameter')"
      (click)="callback(parameter.test)"
      mat-header-cell
      *ngFor="let obs of observable | async as test"
      *matHeaderCellDef
      class="test"
      [ngClass]="{
        'test': test.isTruthy()
      }"
      *
      mask="L{256}"
      let-col$
      ref-variable
      ref-assingVariable$="test"
      let-col$="test"
      let-i="index"
      *ngIf="condition.met()"
      *ngIf="condition?.met()"
      [ngClass]="{ test: sdsdasda }"
      class="testing with non multiline {{ test }}"
      test
      [test]="test.test();"
      *ngIf="selectedCustomer && selectedCustomer.id > 0; else block1; then: block2"
      *ngFor="let a of b['a'][teste]!.asd; index as c | pipe: ''"
      *ngFor="let a of b['a'][teste]!.asd; index as c; | pipe: ''"
      #templateVariable
      (@rightCardTransition.done)="rightCardTransition = 'static'"
      [@.done]="test"
      #menu="test"
      test
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    >
      test-component
    </div>

    <a href="https://fonts.googleapis.com/icon?family=Material+Icons"></a>

    ANGULAR INTERPOLATIONS

    {{ test | pipe }}
    {{ test | pipe: 'withParameters' }}
    {{ angular.interpolations || test }}
    {{ angular?.interpolations(
    'newLineTest'
    ) && test}}
    {{ angular!.interpolations }}
    {{ (null || undefined) ?? "Hello World "; }}

    <span class="test{{test}}"> Hello {{ 1 + 1 === 3 ? 'me' : 'you' }} </span>
    {{ user?.preferences?.avatar }}
    {{ user?.name | uppercase }}
    {{ user!.preferences!.nickName | uppercase }}


    ANGULAR CONTROL FLOW

    @if (
      {
        isLoading: isLoading$ignal(),
        standards: isLoading$ignal() && standards$ignal().length === 0 ? standardsLoadingPlaceholders : standards$ignal(),
        noStandardsMessage: noStandardsMessage$ignal(),
        lastGetStandardsErrored: lastGetStandardsErrored$ignal(),
        isSuperAdministrator: user$ignal().isSuperAdministrator
      };
      as vm
    ) {
      @if (vm.standards.length > 0) {
        <p-table [value]="vm.standards">
          <ng-template pTemplate="header">
            <tr>
              @for (c of columns; track c) {
                <th class="text-center">{{ c.header }}</th>
              }
            </tr>
          </ng-template>

          <ng-template
            pTemplate="body"
            [primeNgTableRow]="vm.standards"
            let-standard
            let-rowIndex="rowIndex"
          >
            @if (!vm.isLoading) {
              <tr>
                @for (c of columns; track c) {
                  @if (c.name === 'order') {
                    <td class="py-0 w-4rem text-center">
                      <div>
                        <p-button
                          [rounded]="true"
                          [text]="true"
                          [icon]="PrimeIcons.CHEVRON_UP"
                          (onClick)="orderStandard(Direction.Forward, standard.extId)"
                          [disabled]="rowIndex === 0"
                        />
                      </div>
                    </td>
                  }
                  @if (c.name === 'actions1') {
                    <td class="p-0 w-2rem text-center"></td>
                  }
                }
              </tr>
            }

            @if (vm.isLoading) {
              <tr>
                @for (c of columns; track c) {
                  <td><p-skeleton /></td>
                }
              </tr>
            }
          </ng-template>
        </p-table>
      }

      @if (vm.standards.length === 0) {
        @if (!vm.lastGetStandardsErrored) {
          <p-message
            severity="info"
            [text]="vm.noStandardsMessage"
          />
        }
        @if (vm.lastGetStandardsErrored) {
          <p-message
            severity="error"
            text="Error Loading Standards"
          />
        }
      }
    }

    <header-cmp />
    @if (showBody) {
      <body-cmp />
    } @else if (showSummary) {
      <summary-cmp />
    } @else {
      Nothing to see here...
    }
    <footer-cmp />

    <ul>
      @for item of item; track item.id {
        <li>{{ item.name }}</li>
      } @empty {
        <li>No items...</li>
      }
    </ul>

    @switch kind {
      @case 'human' {
        <human-cmp />
      }
      @case 'robot' {
        <robot-cmp />
      }
      @default {
        <alien-cmp />
      }
    }

    @defer (on viewport) {
      @main {
        <heavy-cmp />
      }
      @placeholder {
        <img src="ph.png">
      }
      @loading {
        <loading-spinner />
      }
    }

    @defer on viewport {
      @main {
        <heavy-cmp />
      }
      @placeholder {
        <img src="ph.png">
      }
      @loading {
        <loading-spinner />
      }
    }

    @if (a > b) {
      {{a}} is greater than {{b}}
    }

    @if (a > b) {
      {{a}} is greater than {{b}}
    } @else if (b > a) {
      {{a}} is less than {{b}}
    } @else {
      {{a}} is equal to {{b}}
    }

    @if (users$ | async; as users) {
      {{ users.length }}
    }

    @for (item of items; track item.id) {
      {{ item.name }}
    }

    @for (item of items; track item.id; let idx = $index, e = $even) {
      Item #{{ idx }}: {{ item.name }}
    }

    @for (item of items; track item.name) {
      <li> {{ item.name }}</li>
    } @empty {
      <li> There are no items.</li>
    }

    @switch (condition) {
      @case (caseA) {
        Case A.
      }
      @case (caseB) {
        Case B.
      }
      @default {
        Default case.
      }
    }

    @for (item of items; track itemId($index, item)) {
      {{ item.name }}
    }

    ANGULAR STRUCTURAL TAGS

    <ng-content>
      <span [class]="test()"></span>
    </ng-content>

    <ng-container *ngIf="condition?.met">
      <test-component></test-component>
    </ng-container>

    <ng-template #noPublishedDate> No published date </ng-template>

    <router-outlet></router-outlet>

    <div
      *
      test=""
    ></div>

    <input
      type="text"
      #color
      placeholder="Hex color value"
    />
    <button (click)="printValue(color.value)">Show color</button>
    <span> Published: {{ publishedDate | date: 'fullDate' }} </span>

    <span *ngIf="publishedDate"> Published: {{ publishedDate | date: 'fullDate' }} </span>

    <span *ngIf="publishedDate; else noPublishedDate">
      Published: {{ publishedDate | date: 'fullDate' }}
    </span>

    <ul>
      <li *ngFor="let user of users">name: {{ user.name }}, email: {{ user.email }}</li>
    </ul>

    <ul>
      <li *ngFor="let user of users | async as test; index as i">
        {{ i + 1 }}- name: {{ user.name }}, email: {{ user.email }}
      </li>
    </ul>

    <div [ngSwitch]="user.gender">
      <span *ngSwitchCase="'m'">Male</span>
      <span *ngSwitchCase="'f'">Female</span>
      <span *ngSwitchDefault>Not provided</span>
    </div>

    HTML ENTITIES

    &amp;
    &tes;
    &#0;
    /test(|)/
    /test(!)/
    /test(?)/
    /rege(x(es)?|xps?[a-zA-Z0-9])/iu

    DEPRECATED TAGS

    <acronym:test class=""></acronym:test>

    <applet class=""></applet>

    <basefont class="" />

    <big class=""></big>

    <center class=""></center>

    <dir class=""></dir>

    <font class=""></font>

    <frame class="" />

    <frameset class=""> </frameset>

    <isindex class="dsadsdasd" />

    <noframes class=""> </noframes>

    <strike class="ste {{test}}">teste testestestestes </strike>

    <tt> </tt>

    <u> the single quote won't bother anymore neither will the double one " </u>

    DOM EVENTS

    <div
      DOMMenuItemActive="callback()"
      DOMMenuItemInactive="callback()"
      DOMMouseScroll="callback()"
      onabort="callback()"
      onafterprint="callback()"
      onafterupdate="callback()"
      onbeforecopy="callback()"
      onbeforecut="callback()"
      onbeforeeditfocus="callback()"
      onbeforepaste="callback()"
      onbeforeprint="callback()"
      onbeforeunload="callback()"
      onbeforeupdate="callback()"
      onblur="callback()"
      onbounce="callback()"
      onbroadcast="callback()"
      oncanplay="callback()"
      oncanplaythrough="callback()"
      oncellchange="callback()"
      onchange="callback()"
      onclick="callback()"
      onclose="callback()"
      oncommand="callback()"
      oncommandupdate="callback()"
      oncontextmenu="callback()"
      oncopy="callback()"
      oncut="callback()"
      ondataavailable="callback()"
      ondatasetchanged="callback()"
      ondatasetcomplete="callback()"
      ondblclick="callback()"
      ondrag="callback()"
      ondragdrop="callback()"
      ondragend="callback()"
      ondragenter="callback()"
      ondragexit="callback()"
      ondraggesture="callback()"
      ondragleave="callback()"
      ondragover="callback()"
      ondragstart="callback()"
      ondrop="callback()"
      ondurationchange="callback()"
      onemptied="callback()"
      onended="callback()"
      onerror="callback()"
      onerrorupdate="callback()"
      onfilterchange="callback()"
      onfinish="callback()"
      onfocus="callback()"
      onformchange="callback()"
      onforminput="callback()"
      ongotpointercapture="callback()"
      onhelp="callback()"
      oninput="callback()"
      oninvalid="callback()"
      onkeydown="callback()"
      onkeypress="callback()"
      onkeyup="callback()"
      onload="callback()"
      onloadeddata="callback()"
      onloadedmetadata="callback()"
      onloadstart="callback()"
      onlosecapture="callback()"
      onlostpointercapture="callback()"
      onmousedown="callback()"
      onmousemove="callback()"
      onmouseout="callback()"
      onmouseover="callback()"
      onmouseup="callback()"
      onmousewheel="callback()"
      onoverflow="callback()"
      onoverflowchanged="callback()"
      onpaste="callback()"
      onpause="callback()"
      onplay="callback()"
      onplaying="callback()"
      onpointercancel="callback()"
      onpointerdown="callback()"
      onpointerenter="callback()"
      onpointerleave="callback()"
      onpointermove="callback()"
      onpointerout="callback()"
      onpointerover="callback()"
      onpointerup="callback()"
      onpopuphidden="callback()"
      onpopuphiding="callback()"
      onpopupshowing="callback()"
      onpopupshown="callback()"
      onprogress="callback()"
      onpropertychange="callback()"
      onratechange="callback()"
      onreadystatechange="callback()"
      onreset="callback()"
      onresize="callback()"
      onrowenter="callback()"
      onrowexit="callback()"
      onrowinserted="callback()"
      onrowsdelete="callback()"
      onscroll="callback()"
      onseeked="callback()"
      onseeking="callback()"
      onselect="callback()"
      onselectstart="callback()"
      onshow="callback()"
      onstalled="callback()"
      onstart="callback()"
      onstop="callback()"
      onsubmit="callback()"
      onsuspend="callback()"
      ontimeupdate="callback()"
      onunderflow="callback()"
      onunload="callback()"
      onvolumechange="callback()"
      onwaiting="callback()"
    ></div>

    STYLE INLINE

    <div [style]="display: block; background-color: rgb(255, 255, 255);"></div>
    <div style="display: block; background-color: rgb(255, 255, 255); color: rgba(33, 254, 12, 1)"></div>

    GENERIC ATTRIBUTES
    <test-component></test-component>
    <div
      class="test {{test}}"
      id="test"
      aria-test=""
      aria-label="test"
      no-value
      novalidate
    ></div>

    <input type="text" />

    <label
      data-element:suffix_test="with-value"
      test:element
      class="test"
    ></label>

    <button [attr.aria-label]="'test'"></button>

    <button [style.background-color]="canSave ? 'orange' : 'grey'">Save</button>

    <button [style.font-size.em]="isSpecial ? 3 : 1">Big</button>

    XML PROCESSING (WITH DTD SUPPORT)

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE TVSCHEDULE [
      <!ELEMENT TVSCHEDULE (CHANNEL+)>
      <!ELEMENT CHANNEL (BANNER,DAY+)>
      <!ELEMENT BANNER (#PCDATA)>
      <!ELEMENT DAY (DATE,(HOLIDAY|PROGRAMSLOT+)+)>
      <!ELEMENT HOLIDAY (#PCDATA)>
      <!ELEMENT DATE (#PCDATA)>
      <!ELEMENT PROGRAMSLOT (TIME,TITLE,DESCRIPTION?)>
      <!ELEMENT TIME (#PCDATA)>
      <!ELEMENT TITLE (#PCDATA)>
      <!ELEMENT DESCRIPTION (#PCDATA)>
      <!ATTLIST TVSCHEDULE NAME CDATA #REQUIRED>
      <!ATTLIST CHANNEL CHAN CDATA #REQUIRED>
      <!ATTLIST PROGRAMSLOT VTR CDATA #IMPLIED>
      <!ATTLIST TITLE RATING CDATA #IMPLIED>
      <!ATTLIST TITLE LANGUAGE CDATA #IMPLIED>
    ]>

    <SoftwareEngineer>
      <empl id="01">
        <name>
          <projectname> Man-router</projectname>
          <Workingdomain> machine learning</Workingdomain>
        </name>
        <Enddate>
          <entities>
            <![CDATA[
              This is the local project with the fibre optics.
              All the statistical manipulation is performed. Example. '"&<> and submission date 12/12/2020
            ]]>
          </entities>
        </Enddate>
        <lista:book xmlns:list="listurl">
          <li:book xmlns:li="libookurl">
            <li:title>Book Title</li:title>
            <li:author>Ernest Cline</li:author>
          </li:book>
        </lista:book>
      </empl>
    </SoftwareEngineer>

    <lista></lista>

    <?xml-stylesheet ref="shakespeare.xsl" type="text/xsl"?>
    <html xmlns="http://www.w3.org/1999/xhtml">

      <head>
        <t:test> Displaying the Mathematical function </t:test>
      </head>

      <a:test></a:test>

      <body>
        <h1><b> This example Shows how to display a CDATA when Special characters are included
          </b></h1>
        <div id="Demo">
          <![CDATA[
            The statement of the formula includes " if Q(a,b) is a b < c && a > c "
          ]]>
        </div>
      </body>

    </html>

    SVG

    <svg>
      <g
        id="wherever"
        transform="matrix(3.67394e-17 -0.6 0.6 3.67394e-17 148.052 549.951)"
        style="opacity: 1;"
      >
        <path d="M202.35,163.64l-4.38-13.1h-2.13v-3.85h9.1v3.85h-1.82l2.05z" />
      </g>

      <a enable-background=""></a>
      <mask requiredFeatures=""></mask>

      <altGlyph></altGlyph>
      <cursor></cursor>

      <title></title>

      <g
        id="cameraTarget"
        style="visibility: visible;"
        transform="matrix(1.08317 4.47117 -4.47117 1.08317 1189.17 -2385.61)"
      >

        <g
          id="items"
          transform2="translate(-40, -68)"
        >
          <g
            id="wherever"
            transform="matrix(3.67394e-17 -0.6 0.6 3.67394e-17 148.052 549.951)"
            style="opacity: 1;"
          >
            <path
              d="M202.35,163.64l-4.38-13.1h-2.13v-3.85h9.1v3.85h-1.82l2.05,6.2l3.41-10.05h4.43l3.3,10.06l2.05-6.21h-1.88v-3.85h8.08   v3.85h-2.09l-4.33,13.1h-4.63l-3.28-9.82l-3.23,9.82H202.35z"
            />
          </g>
          <g
            id="there"
            transform="translate(528,295)scale(0.6)rotate(-68)translate(0, 0)translate(-494.9250030517578,-317.27000427246094)"
            style="display: inline; opacity: 1;"
          >
            <path
              d="M429.47,313.97l0.01-4.66l3.47,0l0-4.1l5.24-4.78l-0.01,8.89l4.93,0.01l0,4.65l-4.93-0.01l-0.01,12.94   c0,2.08,0.11,3.36,0.34,3.84c0.23,0.49,0.8,0.73,1.72,0.73c0.97,0,1.93-0.18,2.86-0.55l-0.01,4.77c-1.34,0.47-2.68,0.71-4.02,0.71   c-1.6,0-2.9-0.36-3.88-1.06c-0.99-0.71-1.62-1.59-1.87-2.66c-0.26-1.07-0.38-2.91-0.38-5.51l0.01-13.22L429.47,313.97z"
            />
            <path
              d="M450.74,331.34l0.03-29h-4.82l0-4.66l10.05,0.01l-0.01,14.71c3.14-2.53,6.13-3.79,8.95-3.79c1.76,0,3.21,0.37,4.35,1.11   c1.14,0.74,1.91,1.71,2.32,2.91c0.41,1.21,0.62,2.96,0.61,5.28l-0.02,13.47l4.54,0l0,4.65l-9.78-0.01l0.02-16.3   c0-2.02-0.06-3.37-0.19-4.04c-0.13-0.68-0.48-1.24-1.06-1.69c-0.58-0.44-1.26-0.66-2.05-0.66c-2.02,0-4.59,1.14-7.72,3.43   l-0.01,14.6l4.63,0l0,4.65l-14.68-0.01l0-4.65L450.74,331.34z"
            />
            <path
              d="M507.33,324.05l-22.42-0.02c0.33,2.46,1.3,4.46,2.91,5.98c1.62,1.52,3.68,2.29,6.19,2.29c3.65,0.01,6.54-1.46,8.68-4.4   l4.63,2.04c-1.51,2.33-3.46,4.06-5.87,5.19c-2.41,1.13-4.93,1.69-7.55,1.69c-4.08-0.01-7.56-1.28-10.45-3.83s-4.33-5.97-4.32-10.29   c0-4.09,1.42-7.46,4.24-10.1s6.06-3.96,9.71-3.96c3.58,0,6.82,1.3,9.73,3.88C505.73,315.1,507.23,318.94,507.33,324.05z    M501.94,320.24c-0.37-1.87-1.34-3.57-2.92-5.08c-1.58-1.52-3.51-2.27-5.81-2.28c-2.09-0.01-3.88,0.68-5.37,2.04   c-1.49,1.37-2.4,3.13-2.73,5.3L501.94,320.24z"
            />
            <path
              d="M516.03,331.41l0.02-17.35l-5.37-0.01l0-4.65l9.56,0.01l-0.01,6c0.59-1.56,1.41-2.86,2.46-3.88   c1.05-1.03,2.15-1.71,3.32-2.03c1.17-0.33,2.76-0.49,4.78-0.49h1.38l-0.01,5.29l-1.04,0c-2.67,0-4.65,0.26-5.96,0.79   s-2.29,1.5-2.92,2.9c-0.63,1.4-0.95,3.92-0.95,7.56l-0.01,5.87l5.81,0.01l0,4.65l-16.41-0.02l0.01-4.65L516.03,331.41z"
            />
            <path
              d="M560.38,324.11l-22.42-0.03c0.33,2.46,1.3,4.46,2.91,5.98c1.62,1.53,3.68,2.29,6.2,2.29c3.65,0.01,6.54-1.46,8.68-4.4   l4.62,2.04c-1.51,2.33-3.46,4.06-5.87,5.18c-2.4,1.13-4.93,1.69-7.55,1.69c-4.07-0.01-7.56-1.28-10.44-3.83   c-2.89-2.54-4.33-5.97-4.33-10.29c0-4.09,1.42-7.46,4.24-10.11c2.82-2.64,6.06-3.95,9.71-3.95c3.58,0.01,6.82,1.3,9.73,3.88   C558.76,315.16,560.27,319,560.38,324.11z M554.98,320.3c-0.37-1.87-1.34-3.57-2.92-5.08c-1.58-1.52-3.51-2.28-5.81-2.28   c-2.09-0.01-3.88,0.68-5.37,2.04s-2.4,3.13-2.73,5.29L554.98,320.3z"
            />
          </g>
          <g
            id="are"
            transform="matrix(3.06162e-17 -0.5 0.5 3.06162e-17 225.35 562.778)"
            style="display: none; opacity: 0.5;"
          >
            <path
              d="M391.1,432.82v3h-6.25v-1.03c-1.12,0.81-2.3,1.22-3.55,1.22c-1.29,0-2.4-0.37-3.34-1.1c-0.94-0.74-1.4-1.72-1.4-2.96   c0-1.25,0.49-2.29,1.48-3.13c0.99-0.84,2.26-1.26,3.82-1.26c0.87,0,1.87,0.22,3,0.66v-0.79c0-0.66-0.22-1.21-0.67-1.63   c-0.45-0.43-1.05-0.64-1.8-0.64c-0.93,0-1.73,0.34-2.39,1.02l-3.35-0.61c0.97-2.05,3.07-3.08,6.3-3.08c1.26,0,2.29,0.14,3.12,0.42   c0.82,0.28,1.44,0.65,1.84,1.1c0.4,0.45,0.69,0.94,0.85,1.47c0.17,0.53,0.25,1.4,0.25,2.6v4.75H391.1z M384.85,431   c-1-0.63-1.81-0.94-2.41-0.94c-0.47,0-0.91,0.14-1.3,0.42c-0.39,0.28-0.58,0.68-0.58,1.21c0,0.48,0.16,0.88,0.47,1.22   c0.31,0.34,0.72,0.51,1.21,0.51c0.77,0,1.64-0.45,2.61-1.36V431z"
            />
            <path
              d="M399.32,432.82v3h-9.15v-3h2.41v-7.02h-2.26v-3h6.06v3.31c0.23-0.95,0.76-1.77,1.59-2.47c0.83-0.69,1.81-1.04,2.94-1.04   c0.19,0,0.41,0,0.67,0.01v3.92c-1.05,0-1.9,0.12-2.57,0.35c-0.66,0.23-1.21,0.75-1.64,1.53c-0.43,0.79-0.65,1.72-0.65,2.8v1.6   H399.32z"
            />
            <path
              d="M411.16,431.89l3.23,1.04c-1.35,2.12-3.47,3.19-6.35,3.19c-2.29,0-4.08-0.61-5.37-1.82c-1.29-1.21-1.93-2.8-1.93-4.77   c0-2.01,0.66-3.68,1.99-5.03c1.33-1.34,3.01-2.02,5.07-2.02c1.49,0,2.77,0.38,3.86,1.13c1.08,0.75,1.84,1.69,2.26,2.81   c0.42,1.12,0.63,2.37,0.63,3.75h-9.69c0.06,1.18,0.44,2.02,1.12,2.51c0.69,0.49,1.41,0.74,2.17,0.74   C409.15,433.42,410.15,432.91,411.16,431.89z M410.37,427.86c-0.1-0.73-0.38-1.34-0.85-1.86s-1.12-0.77-1.93-0.77   c-1.52,0-2.41,0.87-2.66,2.62H410.37z"
            />
          </g>
          <g
            id="bigYou"
            transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 836.695 596.755)"
            style="opacity: 1;"
          >
            <path
              d="M229.02,356.49v-30.71h25.61l8.87-23.71l-48.53-108.34H195.7v-30.71h79.86v30.71h-15.7l22.19,60.02l23.66-60.02h-17.35   v-30.71h70.08v30.71h-19l-63.89,162.75H229.02z"
            />
            <path
              d="M607.69,265.62v30.7h-64.03v-11.36c-12.76,8.86-25.7,13.29-38.83,13.29c-12.85,0-22.93-3.61-30.22-10.82   c-7.3-7.21-10.95-17.39-10.95-30.54v-63.15H443.7v-30.71h62.37v83.03c0,6.61,1.01,11.13,3.03,13.56c2.02,2.43,5.69,3.65,11.01,3.65   c7.16,0,15.01-3.17,23.55-9.5v-60.04h-20.52v-30.71h63.06v102.58H607.69z"
            />
            <path
              fill="#FF1200"
              d="M396.25,163.03c37.27,0,67.59,30.33,67.59,67.61c0,37.28-30.32,67.61-67.59,67.61   c-37.28,0-67.6-30.33-67.6-67.61C328.65,193.36,358.98,163.03,396.25,163.03L396.25,163.03z M396.25,269.03   c21.16,0,38.37-17.22,38.37-38.39c0-21.16-17.21-38.38-38.37-38.38c-21.16,0-38.38,17.22-38.38,38.38   C357.88,251.81,375.09,269.03,396.25,269.03L396.25,269.03z"
            />
          </g>
          <g
            id="go"
            transform="translate(0,0)translate(388,304)scale(0.3)rotate(0)translate(-358.4499816894531,-348.74998474121094)"
            style="display: inline; opacity: 1;"
          >
            <path
              d="M366.8,299.33v15.8h-11.34v50.71c0,22.65-11.95,33.98-35.86,33.98c-13.7,0-23.91-2.48-30.62-7.44l10.63-14.53   c5.53,3.4,11.08,5.1,16.65,5.1c4.87,0,8.97-1.25,12.3-3.76c3.33-2.5,5-7.37,5-14.6v-5.24c-7.13,6.38-14.08,9.57-20.84,9.57   c-7.94,0-14.71-3.32-20.31-9.96c-5.6-6.64-8.4-15.11-8.4-25.41c0-10.35,2.88-18.82,8.65-25.41c5.76-6.59,12.8-9.89,21.12-9.89   c7.98,0,14.58,3.16,19.77,9.48v-8.41H366.8z M333.64,333.84c0-5.53-1.23-9.9-3.69-13.11c-2.46-3.21-5.81-4.82-10.06-4.82   c-4.35,0-7.67,1.65-9.96,4.96c-2.29,3.31-3.44,7.56-3.44,12.76c0,5.2,1.19,9.44,3.58,12.72c2.39,3.28,5.66,4.93,9.82,4.93   c3.83,0,7.08-1.52,9.74-4.57S333.64,339.37,333.64,333.84z"
            />
            <path
              fill="#FF1200"
              d="M397.02,369.43c-19.78,0-35.87-16.09-35.87-35.87c0-19.78,16.09-35.88,35.87-35.88   c19.78,0,35.87,16.1,35.87,35.88C432.89,353.34,416.8,369.43,397.02,369.43L397.02,369.43z M397.02,313.19   c-11.23,0-20.36,9.13-20.36,20.37c0,11.23,9.13,20.36,20.36,20.36c11.23,0,20.36-9.13,20.36-20.36   C417.38,322.33,408.25,313.19,397.02,313.19L397.02,313.19z"
            />
          </g>
          <g
            id="smallYou"
            amplitude="test"
            stroke="test"
            transform="test"
            transform="matrix(1 0 0 1 2.98499 494.265)"
            style="opacity: 0;"
          >
            <path
              stroke="#FFFFFF"
              d="M332.2,442.05v-11.53h9.61l3.33-8.9l-18.22-40.67h-7.24v-11.53h29.98v11.53h-5.89l8.33,22.53l8.88-22.53   h-6.51v-11.53h26.31v11.53h-7.13l-23.98,61.09H332.2z"
            />
            <path
              d="M474.35,407.94v11.53h-24.03v-4.27c-4.79,3.33-9.65,4.99-14.58,4.99c-4.83,0-8.61-1.35-11.35-4.06s-4.11-6.53-4.11-11.46   v-23.7h-7.49v-11.53h23.41v31.17c0,2.48,0.38,4.18,1.14,5.09c0.76,0.91,2.14,1.37,4.13,1.37c2.69,0,5.63-1.19,8.84-3.57v-22.54   h-7.7v-11.53h23.67v38.51H474.35z"
            />
            <path
              fill="#FF1200"
              d="M394.98,369.43c13.99,0,25.37,11.38,25.37,25.38s-11.38,25.38-25.37,25.38   c-13.99,0-25.38-11.39-25.38-25.38S380.99,369.43,394.98,369.43L394.98,369.43z M394.98,409.22c7.94,0,14.4-6.46,14.4-14.41   c0-7.94-6.46-14.41-14.4-14.41c-7.94,0-14.41,6.46-14.41,14.41C380.57,402.76,387.04,409.22,394.98,409.22L394.98,409.22z"
            />
          </g>
        </g>
      </g>

      <g
        oncancel="test()"
        oncuechange="test()"
        onmouseenter="test()"
        onmouseleave="test()"
        ontoggle="test()"
        oncanplay="test()"
        oncanplaythrough="test()"
        onchange="test()"
        onclick="test()"
        onclose="test()"
        ondblclick="test()"
        ondragend="test()"
        ondragenter="test()"
        ondragleave="test()"
        ondragover="test()"
        DOMMenuItemActive="test()"
        ondragstart="test()"
        ondrag="test()"
        ondrop="test()"
        ondurationchange="test()"
        onemptied="test()"
        onended="test()"
        onerror="test()"
        onfocus="test()"
        oninput="test()"
        oninvalid="test()"
        onkeydown="test()"
        onkeypress="test()"
        onkeyup="test()"
        onloadeddata="test()"
        onloadedmetadata="test()"
        onloadstart="test()"
        onload="test()"
        onmousedown="test()"
        onmousemove="test()"
        onmouseout="test()"
        onmouseover="test()"
        onmouseup="test()"
        onmousewheel="test()"
        onpause="test()"
        onplaying="test()"
        onplay="test()"
        onprogress="test()"
        onratechange="test()"
        onreset="test()"
        onresize="test()"
        onscroll="test()"
        onseeked="test()"
        onseeking="test()"
        onselect="test()"
        onshow="test()"
        onstalled="test()"
        onsubmit="test()"
        onsuspend="test()"
        ontimeupdate="test()"
        onvolumechange="test()"
        onwaiting="test()"
      ></g>

      <a:test></a:test>
      <g:test></g:test>

      <g:test
        id="loading-message"
        display="inline"
      >

      </g:test>
    </svg>

    SVG DEPRECATED TAGS AND ATTRIBUTES

    <svg
      width="100%"
      height="300px"
      enable-background=""
    >

      <h:td>Apples</h:td>
      <h:td>Bananas</h:td>

      <font-face:test alphabetic=""></font-face:test>

      <font:face
        vert-adv-y=""
        d="0 t"
      ></font:face>

      <font-face
        alphabetic=""
        test=""
      >
        <test
          xml:lang=""
          test=""
        ></test>
      </font-face>

      <altGlyphDef
        xml:lang=""
        test=""
      ></altGlyphDef>

      <set
        xlink:arcrole=""
        xml:lang=""
      ></set>

      <g
        id="R1"
        transform="translate(250 250)"
      >
        <ellipse
          rx="100"
          ry="0"
          opacity=".3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="7s"
            from="0"
            to="360"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cx"
            values="-20; 220; -20"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            dur="3s"
            values="10; 60; 10"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>

      <use
        xlink:href="#R1"
        transform="rotate(72 390 150)"
      />
      <use
        xlink:href="#R1"
        transform="rotate(144 390 150)"
      />
      <use
        xlink:href="#R1"
        transform="rotate(216 390 150)"
      />
      <use
        xlink:href="#R1"
        transform="rotate(288 390 150)"
      />
    </svg>

    ANGULAR & ANGULAR MATERIAL STRUCTURAL TAGS

    <ng-container></ng-container>
    <ng-content></ng-content>
    <ng-template></ng-template>
    <cdk-accordion-item></cdk-accordion-item>
    <cdk-accordion></cdk-accordion>
    <cdk-cell></cdk-cell>
    <cdk-footer-cell></cdk-footer-cell>
    <cdk-footer-row></cdk-footer-row>
    <cdk-header-cell></cdk-header-cell>
    <cdk-header-row></cdk-header-row>
    <cdk-nested-tree-node></cdk-nested-tree-node>
    <cdk-row></cdk-row>
    <cdk-step></cdk-step>
    <cdk-table></cdk-table>
    <cdk-tree-node></cdk-tree-node>
    <cdk-tree></cdk-tree>
    <cdk-virtual-scroll-viewport></cdk-virtual-scroll-viewport>
    <mat-accordion></mat-accordion>
    <mat-action-list></mat-action-list>
    <mat-action-row></mat-action-row>
    <mat-autocomplete></mat-autocomplete>
    <mat-basic-chip></mat-basic-chip>
    <mat-button-toggle-group></mat-button-toggle-group>
    <mat-button-toggle></mat-button-toggle>
    <mat-calendar></mat-calendar>
    <mat-card-actions></mat-card-actions>
    <mat-card-content></mat-card-content>
    <mat-card-footer></mat-card-footer>
    <mat-card-header></mat-card-header>
    <mat-card-subtitle></mat-card-subtitle>
    <mat-card-title-group></mat-card-title-group>
    <mat-card-title></mat-card-title>
    <mat-card></mat-card>
    <mat-cell></mat-cell>
    <mat-checkbox></mat-checkbox>
    <mat-chip-avatar let-item$="item$"></mat-chip-avatar>
    <mat-chip-list></mat-chip-list>
    <mat-chip-list></mat-chip-list>
    <mat-chip-list></mat-chip-list>
    <mat-chip></mat-chip>
    <mat-date-range-input></mat-date-range-input>
    <mat-date-range-picker></mat-date-range-picker>
    <mat-datepicker-actions></mat-datepicker-actions>
    <mat-datepicker-toggle></mat-datepicker-toggle>
    <mat-datepicker></mat-datepicker>
    <mat-dialog-actions></mat-dialog-actions>
    <mat-dialog-content></mat-dialog-content>
    <mat-divider></mat-divider>
    <mat-drawer-container></mat-drawer-container>
    <mat-drawer-content></mat-drawer-content>
    <mat-drawer></mat-drawer>
    <mat-error></mat-error>
    <mat-expansion-panel-header></mat-expansion-panel-header>
    <mat-expansion-panel></mat-expansion-panel>
    <mat-form-field></mat-form-field>
    <mat-grid-list></mat-grid-list>
    <mat-grid-tile-footer></mat-grid-tile-footer>
    <mat-grid-tile-header></mat-grid-tile-header>
    <mat-grid-tile></mat-grid-tile>
    <mat-grid-title></mat-grid-title>
    <mat-header-cell></mat-header-cell>
    <mat-header-row></mat-header-row>
    <mat-hint></mat-hint>
    <mat-horizontal-stepper></mat-horizontal-stepper>
    <mat-icon></mat-icon>
    <mat-label></mat-label>
    <mat-list-item></mat-list-item>
    <mat-list-option></mat-list-option>
    <mat-list></mat-list>
    <mat-menu></mat-menu>
    <mat-nav-list></mat-nav-list>
    <mat-nav-tab-bar></mat-nav-tab-bar>
    <mat-nested-tree-node></mat-nested-tree-node>
    <mat-optgroup></mat-optgroup>
    <mat-option></mat-option>
    <mat-paginator></mat-paginator>
    <mat-panel-description></mat-panel-description>
    <mat-panel-title></mat-panel-title>
    <mat-progress-bar></mat-progress-bar>
    <mat-progress-spinner></mat-progress-spinner>
    <mat-pseudo-checkbox></mat-pseudo-checkbox>
    <mat-radio-button></mat-radio-button>
    <mat-radio-group></mat-radio-group>
    <mat-row></mat-row>
    <mat-select-trigger></mat-select-trigger>
    <mat-select></mat-select>
    <mat-selection-list></mat-selection-list>
    <mat-sidenav-container></mat-sidenav-container>
    <mat-sidenav-content></mat-sidenav-content>
    <mat-sidenav></mat-sidenav>
    <mat-slide-toggle></mat-slide-toggle>
    <mat-slider></mat-slider>
    <mat-spinner></mat-spinner>
    <mat-step></mat-step>
    <mat-stepper></mat-stepper>
    <mat-tab-group></mat-tab-group>
    <mat-tab-nav-panel></mat-tab-nav-panel>
    <mat-tab></mat-tab>
    <mat-table></mat-table>
    <mat-text-column></mat-text-column>
    <mat-toolbar-row></mat-toolbar-row>
    <mat-toolbar></mat-toolbar>
    <mat-tree-node></mat-tree-node>
    <mat-tree></mat-tree>
    <mat-vertical-stepper></mat-vertical-stepper>
    <router-outlet></router-outlet>

    PRIMENG ELEMENTS

    <p-accordion></p-accordion>
    <p-accordionTab></p-accordionTab>
    <p-autocomplete></p-autocomplete>
    <p-autoComplete></p-autoComplete>
    <p-autoComplete></p-autoComplete>
    <p-avatar></p-avatar>
    <p-avatarGroup></p-avatarGroup>
    <p-badge></p-badge>
    <p-blockUI></p-blockUI>
    <p-breadcrumb></p-breadcrumb>
    <p-button></p-button>
    <p-calendar></p-calendar>
    <p-captcha></p-captcha>
    <p-card></p-card>
    <p-carousel></p-carousel>
    <p-cascadeSelect></p-cascadeSelect>
    <p-cascadeSelectSub></p-cascadeSelectSub>
    <p-cellEditor></p-cellEditor>
    <p-chart></p-chart>
    <p-checkbox></p-checkbox>
    <p-chip></p-chip>
    <p-chips></p-chips>
    <p-colorPicker></p-colorPicker>
    <p-columnFilter></p-columnFilter>
    <p-confirmDialog></p-confirmDialog>
    <p-confirmPopup></p-confirmPopup>
    <p-contextMenu></p-contextMenu>
    <p-contextMenuSub></p-contextMenuSub>
    <p-dataView></p-dataView>
    <p-dialog></p-dialog>
    <p-divider></p-divider>
    <p-dock></p-dock>
    <p-dropdown></p-dropdown>
    <p-dropdownItem></p-dropdownItem>
    <p-dynamicDialog></p-dynamicDialog>
    <p-editor></p-editor>
    <p-fieldset></p-fieldset>
    <p-fileUpload></p-fileUpload>
    <p-fullCalendar></p-fullCalendar>
    <p-galleria></p-galleria>
    <p-gmap></p-gmap>
    <p-header></p-header>
    <p-image></p-image>
    <p-inplace></p-inplace>
    <p-inplaceDisplay></p-inplaceDisplay>
    <p-inputMask></p-inputMask>
    <p-inputNumber></p-inputNumber>
    <p-inputSwitch></p-inputSwitch>
    <p-knob></p-knob>
    <p-lightbox></p-lightbox>
    <p-listbox></p-listbox>
    <p-megaMenu></p-megaMenu>
    <p-menu></p-menu>
    <p-menubar></p-menubar>
    <p-menubarSub></p-menubarSub>
    <p-messages></p-messages>
    <p-multiSelect></p-multiSelect>
    <p-multiSelectItem></p-multiSelectItem>
    <p-orderList></p-orderList>
    <p-organizationChart></p-organizationChart>
    <p-overlayPanel></p-overlayPanel>
    <p-paginator></p-paginator>
    <p-panel></p-panel>
    <p-panelMenu></p-panelMenu>
    <p-panelMenuSub></p-panelMenuSub>
    <p-password></p-password>
    <p-pickList></p-pickList>
    <p-progressBar></p-progressBar>
    <p-progressSpinner></p-progressSpinner>
    <p-radioButton></p-radioButton>
    <p-rating></p-rating>
    <p-scroller></p-scroller>
    <p-scrollPanel></p-scrollPanel>
    <p-scrollTop></p-scrollTop>
    <p-selectButton></p-selectButton>
    <p-sidebar></p-sidebar>
    <p-skeleton></p-skeleton>
    <p-slideMenu></p-slideMenu>
    <p-slideMenuSub></p-slideMenuSub>
    <p-slider></p-slider>
    <p-sortIcon></p-sortIcon>
    <p-speedDial></p-speedDial>
    <p-spinner></p-spinner>
    <p-splitButton></p-splitButton>
    <p-splitter></p-splitter>
    <p-steps></p-steps>
    <p-table></p-table>
    <p-tableCheckbox></p-tableCheckbox>
    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
    <p-tableRadioButton></p-tableRadioButton>
    <p-tabMenu></p-tabMenu>
    <p-tabPanel></p-tabPanel>
    <p-tabView></p-tabView>
    <p-tag></p-tag>
    <p-terminal></p-terminal>
    <p-tieredMenu></p-tieredMenu>
    <p-tieredMenuSub></p-tieredMenuSub>
    <p-timeline></p-timeline>
    <p-toast></p-toast>
    <p-toastItem></p-toastItem>
    <p-toggleButton></p-toggleButton>
    <p-toolbar></p-toolbar>
    <p-tree></p-tree>
    <p-treeNode></p-treeNode>
    <p-treeSelect></p-treeSelect>
    <p-treeTable></p-treeTable>
    <p-treeTableCellEditor></p-treeTableCellEditor>
    <p-treeTableCheckbox></p-treeTableCheckbox>
    <p-treeTableSortIcon></p-treeTableSortIcon>
    <p-treeTableToggler></p-treeTableToggler>
    <p-triStateCheckbox></p-triStateCheckbox>
    <p-virtualScroller></p-virtualScroller>

    ARIA ATTRIBUTES

    <div
      aria-valuetext=""
      aria-valuenow=""
      aria-valuemin=""
      aria-valuemax=""
      aria-sort=""
      aria-setsize=""
      aria-selected=""
      aria-rowspan=""
      aria-rowindex=""
      aria-rowcount=""
      aria-roledescription=""
      aria-required=""
      aria-relevant=""
      aria-readonly=""
      aria-pressed=""
      aria-posinset=""
      aria-placeholder=""
      aria-owns=""
      aria-orientation=""
      aria-multiselectable=""
      aria-multiline=""
      aria-modal=""
      aria-live=""
      aria-level=""
      aria-labelledby=""
      aria-label=""
      aria-keyshortcuts=""
      aria-invalid=""
      aria-hidden=""
      aria-haspopup=""
      aria-grabbed=""
      aria-flowto=""
      aria-expanded=""
      aria-errormessage=""
      aria-dropeffect=""
      aria-disabled=""
      aria-details=""
      aria-description=""
      aria-describedby=""
      aria-current=""
      aria-controls=""
      aria-colspan=""
      aria-colindex=""
      aria-colcount=""
      aria-checked=""
      aria-busy=""
      aria-autocomplete=""
      aria-atomic=""
      aria-activedescendant=""
    ></div>

    DATA ATTRIBUTES

    <div
      data-test=""
      data-color=""
      data-boolean
    ></div>

    STYLE TAGS

    <style
      test=""
      type="text/css"
      lang="css"
    >
      /*
      * CSS
      */

      /* <![CDATA[ */
      .row {
        padding: 15px;
        background-color: red;
        color: blue;
      }

      /* ]]> */

      :root {
        --blue: #1e90ff;
        --white: #ffffff;
      }

      body {
        display: block;
        background-color: var(--blue);
      }

      h2 {
        border-bottom: 2px solid var(--blue);
      }

      .container {
        padding: 15px;
        background-color: var(--white);
        color: var(--blue);
      }
    </style>

    <style
      type="text/sass"
      lang="sass"
    >
      /*
      * SASS
      */

      /* <![CDATA[ */
      .container
        padding: 15px
        background-color: red
      /* ]]> */

      $base-color: #c6538c
      $border-dark: rgba($base-color, 0.88)

      .alert
        border: 1px solidsdasa $border-dark

    </style>

    <style
      type="text/less"
      lang="less"
    >
      /*
      * LESS
      */

      /* <![CDATA[ */
        .container {
          padding: 15px;
          background-color: red;
          color: blue;
        }
      /* ]]> */


      @red: red;

      .test {
          color: @red;
      }

      @header-font: Arial;

      h1 {
        display: block;
        color: @red;

        &:extend(.test) {
          font-family: @header-font;
        }
      }

      .concrete {
        .test {
          font-family: @header-font;
        }
      }
    </style>

    <style
      type="text/scss"
      lang="scss"
    >
      /*
      * SCSS
      */

      /* <![CDATA[ */
      .container {
        padding: 15px;
        background-color: red;
        color: white;
      }
      /* ]]> */

      $base-color: #c6538c;
      $border-dark: rgba($base-color, 0.88);

      .alert {
        .test {
          border: 1px solid $border-dark;
        }
      }
    </style>

    <style randomarrtr>

    </style>

    <style
      type="text/postcss"
      lang="postcss"
    >
      /*
      * PostCSS
      */

      /* <![CDATA[ */
      .container {
        padding: 15px;
        background-color: red;
        color: blue;
      }
      /* ]]> */

      @custom-media --md (width >= 640px);
      @custom-heading :--heading h1, h2, h3, h4, h5, h6;

      :--heading {
        font-size: 1.2rem;
      }

      @media (--md) {
        font-size: 1.6rem;
      }
    </style>

    <style
      type="text/stylus"
      lang="stylus"
    >
      // Stylus

      // <![CDATA[
        .container
          padding 15px
          background-color red
          color white
      // ]]>

      $font-size = 14px
      $font-stack = "Lucida Grande", Arial, sans-serif

      body
        span
          font $font-size $font-stack

    </style>

    <style>
      /*
      * CSS Fallback
      */

      :root {
        --blue: #1e90ff;
        --white: #ffffff;
      }

      body {
        display: block;
        background-color: var(--blue);
      }

      h2 {
        border-bottom: 2px solid var(--blue);
      }

      .container {
        padding: 15px;
        background-color: var(--white);
        color: var(--blue);
      }
    </style>

    SCRIPT TAGS

    <script
      type="text/coffeescript"
      lang="coffeescript"
    >
      ###
      ## CoffeeScript
      ###


      ### <![CDATA[ ###
      number = 42
      opposite = true
      ### ]]> ###

      number = 42
      opposite = true
      number = -42 if opposite
      square = (x) -> x * x
      list = [1, 2, 3, 4, 5]

      math =
        root:   Math.sqrt
        square: square
        cube:   (x) -> x * square x

      race = (winner, runners...) ->
        print winner, runners

      alert "I knew it!" if elvis?

      cubes = (math.cube num for num in list)
    </script>

    <script
      type="text/typescript"
      lang="typescript"
    >
      /*
      * TypeScript
      */

      /* <![CDATA[ */
      const number = 42
      const number = 42
      const opposite = true
      /* ]]> */

      let a = '123';
      let b: number = 123;
      const b = 'asdf';
      new Class();

      function test() {
        test.callback();
      }

    </script>

    <script
      type="text/dart"
      lang="dart"
    >
      /*
      * Dart
      */

      /* <![CDATA[ */
      var name = 'Voyager I';
      var year = 1977;
      /* ]]> */

      if (year >= 2001) {
        print('21st century');
      } else if (year >= 1901) {
        print('20th century');
      }

      for (final object in flybyObjects) {
        print(object);
      }

      for (int month = 1; month <= 12; month++) {
        print(month);
      }

      while (year < 2016) {
        year += 1;
      }

    </script>

    <script
      type="text/javascript"
      lang="javascript"
    >
      /*
      * JavaScript
      */

      /* <![CDATA[ */
      let a = 42
      const opposite = true
      /* ]]> */

      let test = '123';
      const secondTest = 123;
      new Class();

      function testFn() {
        test.callback();
      }

    </script>

    <script>
      /*
      * JavaScript Fallback
      */

      /* <![CDATA[ */
      let number2 = 42
      const opposite2 = true
      /* ]]> */

      let testvar = '123';
      const secondTest2 = 123;
      new Class();

      function testTwo() {
        test.callback();
      }
    </script>

    <script src="assets/env.js"></script>
    <script randomatttr></script>
  `,
})
export class VscodeAngularInline {}
