<?php if (isset($_SESSION['error'])) : ?>
    <div style="color: red">
        <?php 
            debug($_SESSION); 
            session_unset();
        ?>
    </div>
<?php endif; ?>
