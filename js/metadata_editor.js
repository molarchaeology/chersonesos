// JAVASCRIPT FOR METADATA PAGE


jQuery(document).ready(function() {
    jQuery('select[name="metatype"]').change(function(){
        var metatype = { 'id' : jQuery(this).val(), 'name' :jQuery(this).children('option:selected').text()};
        jQuery(this).closest('td').find('select[name=\"'+metatype.name+'\"]').show();
    });
    jQuery('.newrow').click(function(e){
        e.preventDefault();
        var form = jQuery(this).closest('tr').clone();
        form.find('.newrow').remove();
        jQuery(this).closest('tr').after(form);
    });
    jQuery('span.hidden_options').children('select').hide();
    jQuery('select[name="metatype"]').each(function(){
        if(jQuery(this).val()){
            var name = jQuery(this).children('option:selected').text();
            console.log(name);
            jQuery(this).closest('td').find('select[name=\"'+name+'\"]').show();
        }
    });
    jQuery('span.hidden_options').children('select').change(function(){
        var existing = jQuery(this).closest('td').find('input[name="'+jQuery(this).attr('name')+'_qtype"]');
        console.log(existing);
        if(existing.val()!='edt'){
            var attr_qtype = document.createElement('input');
            attr_qtype = jQuery(attr_qtype);
            attr_qtype.attr('type', 'hidden');
            attr_qtype.attr('value', 'add');
            attr_qtype.attr('name', jQuery(this).attr('name')+'_qtype');
            console.log(attr_qtype);
            jQuery(this).closest('td').children('input[name="'+jQuery(this).attr('name')+'_qtype"]').remove();
            jQuery(this).closest('td').append(attr_qtype);
        }
    });
});
