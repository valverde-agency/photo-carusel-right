<? if ($product->get_gallery_image_ids()) : ?>
    <div class="single-product__gallery">
        <h2>Фотографии дома</h2>
        <div class="single-product__gallery_slider-block">
            <div class="single-product__gallery_slider srtbuttons-top">
                <?php $attachment_ids = $product->get_gallery_image_ids(); ?>
                <?php foreach ($attachment_ids as $attachment_id) { ?>
                    <div class="single-product__gallery_slide">
                        <img src="<?php echo wp_get_attachment_url($attachment_id); ?>" alt="">
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
<? endif ?>