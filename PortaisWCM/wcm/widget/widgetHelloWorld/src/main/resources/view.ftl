<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.hello')}</h1>

    <form role="form">
        <div class="form-group col-md-3">
            <label for="exampleInputEmail" id="text1"></label>
            <input type="text" class="form-control" id="text1" ´placeholder="">
            <button type="button" class="btn btn-default" data-show-click>${i18n.getTranslation('hello.button.showMessage')}</button>
        </div>
        <div class="form-group col-md-3">
            <label for="exampleInputEmail" id="text2"></label>
            <input type="text" class="form-control" id="text2" ´placeholder="">
            <button type="button" class="btn btn-default" data-show-dblclick>${i18n.getTranslation('hello.button.showMessage')}</button>
            
        </div>
        <div class="form-group col-md-3">
            <label for="exampleInputEmail" id="text3"></label>
            <input type="text" class="form-control" id="text3" ´placeholder="">
            <button type="button" class="btn btn-default" data-show-keypress>${i18n.getTranslation('hello.button.showMessage')}</button>        
        </div>
        <div class="form-group col-md-3">
            <label for="exampleInputEmail" id="text4"></label>
            <input type="text" class="form-control" id="text4" ´placeholder="">
            <button type="button" class="btn btn-default" data-show-mouseover>${i18n.getTranslation('hello.button.showMessage')}</button>
            
        </div>
    </form>
    <div id='helloMessage_${instanceId}'>
    </div>
</div>
