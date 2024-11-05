<?php

namespace Mobicoop\Bundle\MobicoopBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DefaultController extends AbstractController
{
    private $searchComponentHorizontal;

    public function __construct(bool $searchComponentHorizontal)
    {
        $this->searchComponentHorizontal = $searchComponentHorizontal;
    }

    public function index()
    {
        return $this->render(
            '@Mobicoop/default/index.html.twig'
        );
    }
}
